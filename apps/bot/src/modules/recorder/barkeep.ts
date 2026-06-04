// Outbound webhook to The Barkeep — a sibling bot that picks up Chronicler's
// raw multi-track artifacts and runs its own transcription/summarization
// pipeline. The integration is intentionally one-way and fire-and-forget so
// that a Barkeep outage cannot affect Chronicler's recording behavior.
//
// Spec source of truth: CHRONICLER_HANDOFF.md (v2) at the repo root of the
// parent project. Key invariants enforced here:
//   - If either env var is unset, this entire module is a silent no-op.
//   - The POST is never awaited by the caller; we expose an async function
//     but callers should invoke it with `void` (fire-and-forget).
//   - All errors are caught and logged. We do NOT retry — Barkeep is
//     idempotent on recordingId+chapterIndex so manual replay is fine.
//   - A short timeout prevents pathological hangs (Barkeep down + DNS
//     misconfigured can otherwise stall Node's microtask queue).
import fetch from 'node-fetch';

export interface BarkeepWebhookPayload {
  recordingId: string;
  chapterIndex: number;
  isFinalChapter: boolean;
  discordGuildId: string;
  discordChannelId: string;
  /** ISO 8601 UTC timestamp for the start of THIS chapter, not the session. */
  startedAt: string;
  /** ISO 8601 UTC timestamp for when this chapter's files were closed. */
  endedAt: string;
  rawFiles: {
    data: string;
    header1: string;
    header2: string;
    users: string;
    info: string;
  };
}

interface MinimalLogger {
  debug?: (...args: any[]) => void;
  warn?: (...args: any[]) => void;
  error?: (...args: any[]) => void;
}

// Defensive timeout. Barkeep is supposed to return 202 immediately; anything
// past a couple seconds means it's wedged and we shouldn't be holding a
// socket open.
const WEBHOOK_TIMEOUT_MS = 5000;

export async function sendBarkeepWebhook(payload: BarkeepWebhookPayload, logger?: MinimalLogger): Promise<void> {
  const url = process.env.BARKEEP_WEBHOOK_URL;
  const secret = process.env.BARKEEP_WEBHOOK_SECRET;
  // Either missing -> silent skip. Lets the user run Chronicler standalone
  // without any Barkeep integration enabled.
  if (!url || !secret) return;

  const controller = new AbortController();
  const timeoutHandle = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Secret': secret
      },
      body: JSON.stringify(payload),
      signal: controller.signal as any
    });
    if (!response.ok) {
      // Non-2xx — log the payload so the user can manually retry. Don't
      // throw; we don't want any rotate()/stop() path to abort here.
      logger?.warn?.(
        `Barkeep webhook returned HTTP ${response.status} for recording ${payload.recordingId} chapter ${payload.chapterIndex}`,
        payload
      );
    } else {
      logger?.debug?.(
        `Barkeep webhook OK for recording ${payload.recordingId} chapter ${payload.chapterIndex}${payload.isFinalChapter ? ' (final)' : ''}`
      );
    }
  } catch (e) {
    // Network error, abort, etc. Log payload + error and move on.
    logger?.error?.(
      `Barkeep webhook failed for recording ${payload.recordingId} chapter ${payload.chapterIndex}: ${e}`,
      payload
    );
  } finally {
    clearTimeout(timeoutHandle);
  }
}

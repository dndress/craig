import fs from 'fs';
import { nanoid } from 'nanoid';
import path from 'path';
import { Readable } from 'stream';

import { clearDownload, setDownload } from '../cache';
import { recPath } from './recording';

export interface DownloadState {
  file: string;
  format: string;
  container: string;
  dynaudnorm: boolean;
  type: string;
}

export const downloadPath = path.join(__dirname, '..', '..', 'downloads');

const pad2 = (n: number) => String(n).padStart(2, '0');

// Reads <id>.ogg.info to build the "chronicler_chN_YYYYMMDD_HHMM_<id>" prefix
// used in both download and Drive filenames. Falls back gracefully to the
// id alone if the info file is missing or malformed.
async function buildChroniclerPrefix(id: string): Promise<string> {
  try {
    const raw = await fs.promises.readFile(path.join(recPath, `${id}.ogg.info`), 'utf8');
    const info = JSON.parse(raw);
    const startDate = new Date(info.startTime ?? Date.now());
    const ts = `${startDate.getFullYear()}${pad2(startDate.getMonth() + 1)}${pad2(startDate.getDate())}_${pad2(startDate.getHours())}${pad2(startDate.getMinutes())}`;
    const chapterTag = info.chapter && typeof info.chapter.number === 'number' ? `ch${info.chapter.number}_` : '';
    return `chronicler_${chapterTag}${ts}_${id}`;
  } catch {
    return `chronicler_${id}`;
  }
}

export async function writeToFile(
  stream: Readable,
  id: string,
  ext: string,
  format: string,
  container: string,
  dynaudnorm: boolean,
  type = 'default'
) {
  const prefix = await buildChroniclerPrefix(id);
  // Tail nanoid keeps multiple cooks of the same id from clobbering each
  // other (e.g. a user re-downloading while a previous cook is still on
  // disk).
  const file = `${prefix}_${nanoid(15)}.${ext}`;
  await setDownload(id, { file, format, container, dynaudnorm, type });
  const writer = fs.createWriteStream(path.join(downloadPath, file));
  writer.on('finish', () => console.log(`Finished writing ${id} to ${file} (${format}.${container})`));
  writer.on('error', async () => {
    console.error(`Error writing ${id} to ${file} (${format}.${container})`);
    await clearDownload(id);
    await removeFile(file);
  });
  console.log(`Writing ${id} to ${file} (${format}.${container})`);
  stream.pipe(writer);
}

export async function removeFile(file: string) {
  try {
    await fs.promises.unlink(path.join(downloadPath, file));
  } catch (err) {
    console.error(`Failed to delete file ${file}`, err);
  }
}

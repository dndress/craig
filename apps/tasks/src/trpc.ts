import * as trpc from '@trpc/server';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { z } from 'zod';

import { driveUpload } from './queries/driveUpload';

export const appRouter = trpc.router().query('driveUpload', {
  input: z.object({
    recordingId: z.string(),
    userId: z.string(),
    // Optional per-call format override. When omitted the user's saved
    // dashboard preference is used (upstream behavior).
    format: z.string().optional(),
    container: z.string().optional()
  }),
  resolve: async ({ input }) => {
    return await driveUpload(input);
  }
});

export type AppRouter = typeof appRouter;

const { server, listen } = createHTTPServer({
  router: appRouter,
  createContext() {
    return {};
  }
});

export { listen, server };

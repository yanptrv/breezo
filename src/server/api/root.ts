import { createTRPCRouter } from "~/server/api/trpc";
import { developmentRouter } from "~/server/api/routers/development";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  development: developmentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

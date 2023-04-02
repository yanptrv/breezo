import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const developmentRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      greeting: `Still in development`,
    };
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});

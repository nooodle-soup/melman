import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const customerRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    const customers = ctx.db.users.findMany();
    return customers;
  }),

});

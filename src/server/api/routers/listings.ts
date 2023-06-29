import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const listingsRouter = createTRPCRouter({
  create: protectedProcedure
  .input(
    z.object({ name: z.string(), description: z.string(), price: z.string() })
  )
  .mutation(async ({ input, ctx }) => {
    console.log(input);
    
    const listing = await ctx.prisma.listing.create({
      data: {
        ...input,
        userId: ctx.auth.userId,
      },
    });
    return listing;
  }),
});
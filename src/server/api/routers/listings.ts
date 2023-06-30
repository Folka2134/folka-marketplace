import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";

export const listingsRouter = createTRPCRouter({
  get: publicProcedure.input(z.object({ listingId : z.string()})).query(({ctx, input}) => {
    return ctx.prisma.listing.findUnique({
      where: {
        id: input.listingId
      }
    })
  }),
  list: publicProcedure.query(({ctx}) => {
    return ctx.prisma.listing.findMany()
  }),
  create: protectedProcedure
  .input(
    z.object({ name: z.string(), description: z.string(), price: z.number() })
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
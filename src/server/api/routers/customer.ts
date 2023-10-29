import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";

export const customerRouter = createTRPCRouter({
  getCustomersOfVendor: privateProcedure
    .query(async ({ ctx }) => {
      const vendorExists = await ctx.db.vendor.findUnique({
        where: {
          vendorId: ctx.currentUser
        }
      })

      if (!vendorExists) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Vendor does not exist"
        })
      }

      const customersOfVendor = await ctx.db.vendor.findUnique({
        where: {
          vendorId: ctx.currentUser
        },
        include: {
          customers: true,
        },
      });

      return customersOfVendor;

    }),

  /*
    */
  createCustomerForVendor: privateProcedure
    .input(
      z.object({
        firstName: z.string()
          .min(2, {
            message: "First name must be at least 2 characters.",
          }),
        lastName: z.string(),
        email: z.string().email()
      }))
    .mutation(async ({ ctx, input }) => {
      // const vendorId = ctx.currentUser;

      const customerExists = await ctx.db.user.findUnique({
        where: {
          email: input.email
        }
      })

      if (customerExists) {
        console.log("Customer Exists")
        // update customer vendors
      }
      else {
        console.log("Customer Does Not Exist")
        // create customer and add to vendor's customers
      }
    }),
});

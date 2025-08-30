import { v } from "convex/values";
import { mutation } from "./_generated/server";

// Mutation = only inserts user (requires already hashed password)
export const _insertUser = mutation({
  args: {
    email: v.string(),
    fullName: v.string(),
    passwordHash: v.string(),
  },
  handler: async (ctx, { email, fullName, passwordHash }) => {
    return await ctx.db.insert("users", {
      email,
      fullName,
      passwordHash,
      createdAt: new Date().toISOString(),
    });
  },
});





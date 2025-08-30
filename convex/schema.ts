import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    fullName: v.string(),
    email: v.string(),
    passwordHash: v.string(),
    createdAt: v.optional(v.string()),
  }),
  tutorials: defineTable({
    title: v.string(),
    language: v.string(),
    difficulty: v.string(),
    videoUrl: v.optional(v.string()),
    createdAt: v.optional(v.string()),
  }),
  userProgress: defineTable({
    userId: v.string(),
    tutorialId: v.string(),
    completedExercises: v.optional(v.number()),
    totalExercises: v.optional(v.number()),
    lastAccessed: v.optional(v.string()),
  }),
  favorites: defineTable({
    userId: v.string(),
    tutorialId: v.string(),
    addedAt: v.optional(v.string()),
  }),
});

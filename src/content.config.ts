import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Reviewer FAQ: plain-language answers to the questions a distributor's
// reviewer has when they land on a shared SessionSeal report. Titles ARE the
// questions. Ordered by `order` on the /faq index.
const reviewers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reviewers" }),
  schema: z.object({
    title: z.string(),
    // A one-line answer shown under the title on the index and as the meta
    // description. Should stand on its own.
    summary: z.string(),
    // Grouping on the index page.
    group: z.enum(["Start here", "The signed record (C2PA)", "The evidence", "Trust and limits"]),
    order: z.number(),
    updated: z.string(),
  }),
});

export const collections = { reviewers };

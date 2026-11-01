import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    source: z.string(), // journal, book or proceedings
    year: z.number().int(),
    type: z.enum(["makale", "kitap-bolum", "bildiri"]),
    link: z.string().url().optional(), // DOI or PubMed
  }),
});

const awards = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/awards" }),
  schema: z.object({
    year: z.number().int(),
    title: z.string(),
    body: z.string(), // awarding body
    context: z.string().optional(),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/press" }),
  schema: z.object({
    outlet: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    type: z.enum(["roportaj", "haber", "dijital", "video"]),
    region: z.enum(["yurt-ici", "yurt-disi"]),
    language: z.string(),
    summary: z.string(), // one line, written for this site
    link: z.string().url(),
  }),
});

const cvItem = z.object({ period: z.string().optional(), text: z.string() });

const cv = defineCollection({
  loader: glob({ pattern: "cv.json", base: "./src/content/cv" }),
  schema: z.object({
    education: z.array(cvItem),
    positions: z.array(cvItem),
    titles: z.array(cvItem),
    memberships: z.array(cvItem),
    roles: z.array(cvItem), // editorial and board roles
  }),
});

export const collections = { pages, publications, awards, press, cv };

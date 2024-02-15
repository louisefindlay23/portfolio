import { defineCollection, z } from "astro:content";

const iconLinkSchema = z.object({
  icon: z.string(),
  url: z.string(),
  text: z.string(),
});

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      links: z.array(iconLinkSchema).optional(),
    }),
  }),
  work: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      links: z.array(iconLinkSchema).optional(),
    }),
  }),
};

export type links = z.infer<typeof iconLinkSchema>;

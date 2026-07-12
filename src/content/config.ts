import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 리포트 콘텐츠 컬렉션 스키마
const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // YYYY-MM-DD
    type: z.string(), // macro | equity | crypto | commodity | strategy ...
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    keywords: z.array(z.string()).default([]),
    canonical: z.string().url().optional(),
    proOnly: z.boolean().default(false),
    adSlot: z.string().optional(), // AdSense 슬롯 ID 자리
  }),
});

export const collections = { reports };

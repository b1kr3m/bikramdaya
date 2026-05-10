# Image Structure Guide

Use one folder only for all website images:

- `public/images/`

## Naming Rules

- Use lowercase letters, numbers, and dashes only.
- Good examples:
  - `bikram-daya.jpg`
  - `school-visit-2026-01.jpg`
  - `classroom-children-01.webp`

## How To Add Gallery Images

1. Copy files into `public/images/`
2. Open `src/content/media.ts`
3. Add an item in `galleryItems`:

```ts
{
  src: "/images/your-file.jpg",
  alt: "Short alt text",
  title: "Optional title",
  date: "Optional date"
}
```

## Recommended Formats

- Prefer `.webp` for speed.
- Use `.jpg` for photographs when needed.
- Keep each image around 300KB-800KB when possible.

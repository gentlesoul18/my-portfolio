# Barakat Oyebamiji — Portfolio

Personal portfolio site for Barakat Oyebamiji, backend & software engineer.

Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Supports dark/light mode, OG share cards, Formspree contact form, and Vercel Analytics.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel Analytics](https://vercel.com/analytics)
- [Formspree](https://formspree.io/) — contact form submissions

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
NEXT_PUBLIC_SITE_URL=https://your-deployed-url.vercel.app
```

`NEXT_PUBLIC_FORMSPREE_ID` — without this, the contact form falls back to `mailto:`.  
`NEXT_PUBLIC_SITE_URL` — used to set `metadataBase` for OG/Twitter share cards.

## Deploy

Push to `main` and connect the repo on [Vercel](https://vercel.com). Add the env vars above under **Project → Settings → Environment Variables**.

## Sections

| Section | Component |
|---|---|
| Hero | `components/Hero.tsx` |
| Projects | `components/Projects.tsx` |
| Skills | `components/Skills.tsx` |
| Experience | `components/Experience.tsx` |
| About | `components/About.tsx` |
| Contacts | `components/Contacts.tsx` |

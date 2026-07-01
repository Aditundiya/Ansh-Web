# Ansh — website

Marketing landing page + Privacy Policy + Terms of Service for **[Ansh](https://ansh-web.vercel.app)**, a free, privacy-first budgeting app and bill-splitter for Android.

- **Live site:** https://ansh-web.vercel.app
- **The app:** Android (Next.js static export → Capacitor). In early access on Google Play.

## About Ansh
A budgeting app and a bill-splitter in one — expense & income tracking, budgets, savings goals, recurring-bill reminders, group splitting with settle-up, monthly PDF reports, receipt scanning (on-device), and offline support. **Free forever — no ads, no subscriptions, no data harvesting, no bank linking.** Your data stays yours, with optional backup to your own Google Drive.

## Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Deployed on Vercel (auto-deploys from `main`)

## Develop
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure
- `src/app/page.tsx` — landing page (hero, features, how-it-works, FAQ, CTA)
- `src/app/privacy/page.tsx` — Privacy Policy
- `src/app/terms/page.tsx` — Terms of Service
- `src/components/ui/animated-shader-hero.tsx` — hero component

---
Separate repo from the app itself. Support is handled in-app (Settings → Support).

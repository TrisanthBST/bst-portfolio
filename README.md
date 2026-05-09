# BST Developers Portfolio

Portfolio website for **B. Trisanth** and **BST Developers**, built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP
- Lenis

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Environment

If you keep the admin or API features later, copy `.env.example` to `.env.local` and fill in the needed values.

For the current public portfolio customization, those backend variables are not required just to work on the homepage content and project presentation.

## GitHub Publish

After creating a new empty GitHub repository, run:

```bash
git add .
git commit -m "Initial BST Developers portfolio"
git remote add origin <your-github-repo-url>
git push -u origin main
```

Example:

```bash
git remote add origin https://github.com/TrisanthBST/bst-portfolio.git
git push -u origin main
```

## Deploy

This project is a good fit for Vercel.

Recommended deployment flow:

1. Push the repository to GitHub
2. Import the repo into Vercel
3. Add environment variables only if you decide to use the admin/API/backend features
4. Set your custom domain later

## Current Notes

- Replace the CargoLink placeholder preview with real screenshots or a thumbnail
- Add your resume PDF if you want a resume CTA
- Install dependencies and run lint/build before production deployment

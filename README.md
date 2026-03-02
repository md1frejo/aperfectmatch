This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


description

This is a dating site in wich customers are matched against available partners


overall planning:


sprint 1:
1: setup overall logic, functions for retreving images, and create a user profile

2: implement the dating algorithm, how to match afainst a set of preferences

sprint 2: 
3: test the logic, test different user cases

4: create the css for the site


details: 

1: the ovall logic is to create components that can read pictures from an 
   api https://api.unsplash.com/search/photos
   and then be able to register a profile that is used to mathc other profiles

2: the dating algorithm should be stable and as an input the preferences of different can   didates and provide a list of candidates. 

3: the matching algoritm should be tested that it is stable, i.e that is always provide a   result

4: the overaill css should be made with tailwind and as an example of the final result is   an example below


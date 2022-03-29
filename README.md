<h2 align="center">
  IgNews - A Blog built with NextJS
</h2>

<p align="center">
<img src="https://raw.githubusercontent.com/leo-pro/template-nextjs-styled-components/develop/public/preview.png" width="70%">
</p>

<p>🖥️ <b>Live Demo:</b> <a href="https://boilerplate-nextjs-styled-components.vercel.app/" target="_blank">Click here</a></p>

## Install and Run

To install and run the application, make sure that you have accounts created on Stripe and FaunaDB. 

Next Steps:

- Clone repository and install dependencies:

```
  git clone https://github.com/leo-pro/ignews
  cd ignews
  yarn or npm install
```
- Creating a new file <code>.env.local</code>

```
  # Stripe
  STRIPE_SUCCESS_URL=
  STRIPE_CANCEL_URL=
  STRIPE_API_KEY=
  NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
  STRIPE_WEBHOOK_SECRET=

  # Github
  GITHUB_CLIENT_ID=
  GITHUB_CLIENT_SECRET=

  # FaunaDB
  FAUNADB_KEY=

  # JWT
  SIGNIN_KEY=

  # Next Auth
  NEXTAUTH_URL=

  # Prismic CMS
  PRISMIC_ACCESS_TOKEN=
  PRISMIC_ENDPOINT=
```


- Running the project into your browser at http://localhost:3000

```
  yarn dev
  # or
  npm run dev
```

- Generating static build to deploy

```
  yarn build
  # or
  npm run build
```

## Techs

<p>
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</p>

##

Made with NextJS by [Leonardo Alves](https://www.linkedin.com/in/leonardoalvess/)

# Le Génie Frontend

Ce projet est une application frontend développée avec [Next.js](https://nextjs.org), TypeScript et TailwindCSS. Il constitue l'interface utilisateur pour le blog "Akieni".

---

## Prérequis

- Node.js >= 18.x
- Yarn >= 4.x (ou npm, pnpm, bun)

## Installation

Clone le dépôt puis installe les dépendances :

```bash
git clone <url-du-repo>
cd frondend
yarn install
# ou npm install
```

## Configuration des variables d'environnement

Copie le fichier `.env.example` en `.env` et complète les variables nécessaires :

```bash
cp .env.example .env
```

Variables importantes à renseigner :
- `LOGTAIL_SOURCE_TOKEN` (optionnel, pour la journalisation)
- `BOG_API_BASE_URL` (URL de l'API backend)
- `BOG_API_KEY` (clé API backend) avenir
- `NEXT_PUBLIC_APP_URL` (URL publique du frontend)


## Lancement en développement

```bash
yarn dev
# ou npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000).

## Linting & Formatage

Pour vérifier la qualité du code et le formatage :

```bash
yarn lint
# ou npm run lint

yarn lint:fix
# ou npm run lint:fix
```

## Build & Production

Pour générer le build de production :

```bash
yarn build
yarn start
```

## Déploiement

Le projet peut être déployé sur Vercel, Netlify ou toute plateforme compatible Next.js. Pour Vercel :

1. Connecte le repo à Vercel
2. Renseigne les variables d'environnement dans le dashboard Vercel
3. Lance le déploiement

## Stack technique

- Next.js 15
- React 19
- TypeScript
- TailwindCSS
- Radix UI, Tiptap, Sentry, PostHog, etc.

## Liens utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation TailwindCSS](https://tailwindcss.com/docs)
- [Vercel](https://vercel.com/)

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

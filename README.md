## Suit Ideas UI

Small Next.js app that lists ideas from the SuitMedia API with pagination, sorting, and skeleton loading states.

### Requirements

- Node.js 18+
- npm (or any Node package manager)

### Setup

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Open http://localhost:3000

### Environment

Create a `.env.local` if you need to override defaults:

- `NEXT_PUBLIC_API_BASE_URL` (default: http://localhost:3000/api) — client axios base.
- `NEXT_PUBLIC_SUIT_BASE_URL` (default: https://suitmedia-backend.suitdev.com/api) — upstream Suit API for the Next.js route.

### Core flows

- `/ideas` page uses React Query to fetch ideas, with pagination + size + sort query params.
- API route `/api/ideas` proxies to Suit API, sanitizes inputs, and appends `small_image` and `medium_image` sizes.
- UI shows skeleton cards on first load and a loading spinner on subsequent fetches; pagination is disabled while loading.

### Query params (client)

- `page` (>=1)
- `size` (10–50)
- `sort`: `published_at` (oldest) or `-published_at` (newest)

### Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm start` — run built app
- `npm run lint` — lint with ESLint

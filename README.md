# CBA AI Platform

![CI](https://github.com/wizelements/cba-ai-platform/actions/workflows/ci.yml/badge.svg)
![CodeQL](https://github.com/wizelements/cba-ai-platform/actions/workflows/codeql.yml/badge.svg)

Cod3BlackAgency internal platform for AI-assisted development workflows and client project management.

---

## Overview

CBA AI Platform serves as the central hub for Cod3BlackAgency operations:

- **AI Development Tools** - Integrated GPT-4 and custom AI assistants for code generation
- **Client Portal** - Project status, deliverables, and communication
- **Workflow Automation** - Streamlined project kickoff to delivery pipeline

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 13 (Pages Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| AI | OpenAI GPT-4 |
| Database | Prisma + Supabase |
| Payments | Stripe |
| Auth | Firebase |
| Deployment | Vercel |

---

## Project Structure

```
cba-ai-platform/
├── codeblackagency-ai-landing/    # Main application
│   ├── components/                 # React components
│   ├── pages/                      # Next.js pages
│   ├── data/                       # Static data and configs
│   └── styles/                     # Tailwind styles
├── .github/                        # CI/CD workflows
└── docs/                           # Documentation
```

---

## Quick Start

```bash
git clone https://github.com/wizelements/cba-ai-platform.git
cd cba-ai-platform/codeblackagency-ai-landing
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for AI features | Yes |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `SUPABASE_SERVICE_KEY` | Supabase service role key | Yes |
| `STRIPE_SECRET_KEY` | Stripe API key | Yes |
| `FIREBASE_CONFIG` | Firebase configuration JSON | Yes |

---

## Features

### Landing Page
- Agency services overview
- Portfolio showcase
- Contact and booking integration

### AI Assistant
- Code generation and review
- Project scoping assistance
- Documentation generation

### Client Dashboard
- Project timeline and milestones
- Deliverable tracking
- Invoice and payment history

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
```

---

## Deployment

Deployed automatically to Vercel on push to main branch.

For manual deployment:

```bash
vercel --prod
```

---

## Roadmap

- [ ] Enhanced AI code review integration
- [ ] Automated project status updates
- [ ] Client self-service portal expansion
- [ ] Multi-tenant agency support

---

## Security

See [SECURITY.md](SECURITY.md) for vulnerability reporting.

---

## License

[MIT](LICENSE)

---

Built by [Cod3BlackAgency](https://github.com/wizelements)

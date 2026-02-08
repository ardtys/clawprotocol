# CLAW PROTOCOL

Archive your digital legacy. Shed your digital skin.

The Claw Protocol archives your Web 2.0 footprint into encrypted, immutable records. Rip through the noise. Archive what matters. Molt into the future.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## Features

- **Digital Archive System** - Archive your Web 2.0 data into the Moltbook
- **Encrypted Records** - Immutable, secure data storage
- **Modern UI/UX** - Built with Next.js 16 and Tailwind CSS 4
- **Fully Responsive** - Optimized for all devices
- **SEO Optimized** - Complete metadata and Open Graph tags
- **Type-Safe** - Built with TypeScript

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript 5
- **Fonts:** Playfair Display, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd "CLAW PROTOCOL"
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and configure:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Production

Run the production server:

```bash
npm start
```

## Project Structure

```
CLAW PROTOCOL/
├── public/              # Static assets
│   ├── favicon.ico
│   ├── logo.png
│   └── manifest.json
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page
│   │   ├── docs/       # Documentation
│   │   ├── faq/        # FAQ page
│   │   ├── features/   # Features page
│   │   ├── protocol/   # Protocol details
│   │   ├── roadmap/    # Roadmap page
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Homepage
│   │   └── globals.css # Global styles
│   └── components/     # React components
├── .env.example        # Environment variables template
├── .env.local          # Local environment variables (git-ignored)
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── vercel.json         # Vercel deployment configuration
└── DEPLOYMENT.md       # Deployment guide
```

## Available Pages

- `/` - Homepage
- `/about` - About Claw Protocol
- `/protocol` - Protocol Details
- `/features` - Key Features
- `/roadmap` - Development Roadmap
- `/docs` - Documentation
- `/faq` - Frequently Asked Questions

## Deployment

This project is optimized for deployment on Vercel.

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Environment Variables for Production

Set these in your Vercel project settings:

```env
NEXT_PUBLIC_BASE_URL=https://clawprotocol.io
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## SEO & Metadata

The application includes:

- Complete Open Graph tags for social sharing
- Twitter Card metadata
- Proper semantic HTML structure
- Sitemap and robots.txt configuration
- PWA manifest for installability

## Performance

- Static page generation for all routes
- Optimized fonts with `next/font`
- Image optimization with Next.js Image component
- Automatic code splitting
- CSS optimization with Tailwind CSS

## Security

Security headers configured in `vercel.json`:

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: enabled
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: restricted camera, microphone, geolocation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

This project is licensed under the MIT License.

## Support

For support, email support@clawprotocol.io or open an issue on GitHub.

## Links

- **Website:** https://clawprotocol.io
- **Twitter:** [@clawprotocol](https://twitter.com/clawprotocol)
- **Documentation:** [View Docs](https://clawprotocol.io/docs)

---

Built with care by the Claw Protocol Team.

**Status:** ✅ Production Ready

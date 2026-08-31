# OpenDroneDiary Landing Page

OpenDroneDiary Landing Page is a Next.js 15 static site that serves as the marketing landing page for the OpenDroneDiary drone flight diary management tool. Built with React 19, TypeScript, and Tailwind CSS 4, it generates static HTML files for deployment to GitHub Pages.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap, Build, and Test the Repository

**CRITICAL: NEVER CANCEL builds or long-running commands. All timing expectations below include 50% buffer.**

1. **Verify Node.js version**: Must be Node.js 18+ (CI uses Node.js 22)
   ```bash
   node --version  # Should be 18+ (ideally 22+)
   ```

2. **Install dependencies**: 
   ```bash
   npm install  # Takes ~7 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
   ```

3. **Setup environment variables** (required for proper functionality):
   ```bash
   cp .env.example .env.local
   # Edit .env.local to set:
   # NEXT_PUBLIC_APP_URL=https://your-app-url.com (required)
   # NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX (optional)
   ```

4. **Lint the code**:
   ```bash
   npm run lint  # Takes ~2 seconds. NEVER CANCEL. Set timeout to 30+ seconds.
   ```

5. **Build for production**:
   ```bash
   npm run build  # Takes ~20 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
   ```
   - Generates static files in `out/` directory
   - Uses static export mode (not traditional Next.js server)

6. **Run development server**:
   ```bash
   npm run dev  # Starts in <1 second on http://localhost:3000
   ```
   - Uses Turbopack for faster development
   - Hot reload enabled
   - DO NOT use `npm start` - it doesn't work with static export mode

## Validation

**CRITICAL: Always manually validate changes through complete user scenarios.**

### Manual Testing Requirements
After making any changes, ALWAYS test these complete scenarios:

1. **Homepage functionality**:
   - Navigate to http://localhost:3000
   - Verify hero section loads with Japanese content
   - Test "今すぐ始める" button links to correct app URL from environment
   - Test "GitHub で見る" button links to GitHub repository
   - Scroll through all sections: hero, features, open source benefits, CTA

2. **Navigation testing**:
   - Test header navigation links: 機能, よくある質問, 利用規約, プライバシーポリシー
   - Verify all pages load: /faq, /terms, /privacy
   - Test footer links work correctly
   - Verify responsive design on different screen sizes

3. **Environment variable validation**:
   - Confirm "今すぐ始める" buttons use NEXT_PUBLIC_APP_URL value
   - Check Google Tag Manager integration if NEXT_PUBLIC_GTM_ID is set

4. **Static export validation**:
   - After `npm run build`, verify `out/` directory contains all HTML files
   - Test static files can be served (e.g., `python3 -m http.server 8000 --directory out`)

### Build Validation Commands
ALWAYS run these before committing changes:

```bash
npm run lint     # NEVER CANCEL. Takes ~2 seconds.
npm run build    # NEVER CANCEL. Takes ~20 seconds. 
```

## Common Tasks

### Repository Structure
```
.
├── README.md                 # Main documentation
├── package.json              # Dependencies and scripts
├── next.config.ts           # Next.js config (static export enabled)
├── tsconfig.json            # TypeScript configuration  
├── .eslintrc.json           # ESLint configuration
├── postcss.config.mjs       # PostCSS config for Tailwind CSS
├── .env.example             # Environment variables template
├── app/                     # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage component
│   ├── globals.css          # Global styles with Tailwind
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Site header navigation
│   │   ├── Footer.tsx       # Site footer  
│   │   └── GoogleTagManager.tsx  # GTM integration
│   ├── faq/                 # FAQ page
│   ├── terms/               # Terms of service page
│   └── privacy/             # Privacy policy page
├── public/                  # Static assets
└── .github/workflows/       # CI/CD configuration
```

### Key npm Scripts
```bash
npm run dev      # Development server (recommended)
npm run build    # Build static export
npm run lint     # ESLint validation
npm start        # NOT SUPPORTED (static export mode)
```

### Environment Variables
The application requires these environment variables in `.env.local`:

- `NEXT_PUBLIC_APP_URL`: URL of the main OpenDroneDiary application (required)
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager container ID (optional)

### Deployment
- Static files are generated in `out/` directory
- GitHub Actions automatically deploys to GitHub Pages on push to main
- CI uses Node.js 22 and the same commands documented here

## Troubleshooting

### Common Issues
1. **Build fails**: Ensure Node.js 18+ and run `npm install` first
2. **npm start doesn't work**: Expected - use `npm run dev` for development or serve `out/` for production testing
3. **Environment variables not working**: Ensure `.env.local` exists and contains `NEXT_PUBLIC_APP_URL`
4. **Pages not found**: Verify static export generated `.html` files in `out/` directory

### Expected CI/Build Times
- **npm install**: 7-10 seconds
- **npm run lint**: 2-3 seconds  
- **npm run build**: 20-30 seconds
- **Total CI time**: ~2-3 minutes including deployment

## Important Notes
- This is a **Japanese language** landing page for a drone flight diary tool
- Content focuses on OpenDroneDiary features and open source benefits
- All external links point to the main application and GitHub repository
- SEO optimized with proper metadata and social media tags
- Mobile responsive design using Tailwind CSS
- Static site generation for optimal performance and GitHub Pages compatibility
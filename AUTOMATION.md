# 🚀 Production-Grade Automation Guide

## 🛠️ Tools Setup

### 1. Formatting & Linting

- **Prettier**: Ensures consistent code style. Run `pnpm format` to fix all files.
- **ESLint**: Catches bugs and enforces patterns. Run `pnpm lint`.
- **Husky & lint-staged**: Automatically runs formatting and linting on staged files before every commit.

### 2. Version Control & Changelogs

- **standard-version**: Automates version bumping (SemVer) and generates `CHANGELOG.md`.
- **Usage**: Run `pnpm release` to:
    1. Bump version in `package.json`.
    2. Generate/update `CHANGELOG.md` based on commit messages.
    3. Create a git commit and tag.

### 3. Environment Variables

- Use `.env.example` as a template for new developers.

- In Vercel, add these variables in **Project Settings > Environment Variables**.

### 4. CI/CD (Vercel)

- **Automatic Deployments**: Every push to `main` triggers a production build.
- **Preview Deployments**: Every Pull Request creates a unique preview URL.

- **Build Command**: `pnpm build`
- **Output Directory**: `.next`

## 📋 Workflow for Production

1. **Develop**: Write code and commit using Conventional Commits (e.g., `feat: add login`, `fix: resolve bug`).
2. **Commit**: Husky will run `lint-staged` to ensure code quality.
3. **Release**: Run `pnpm release` before merging to `main` to automate versioning.
4. **Deploy**: Push to GitHub $\rightarrow$ Vercel automatically deploys.

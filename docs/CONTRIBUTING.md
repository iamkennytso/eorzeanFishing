# Contributing

Thanks for your interest in contributing to Eorzean Fishing! This project is driven by the FFXIV community's passion for fishing.

## Before You Start

- Check existing issues before creating a new one
- Review open pull requests to avoid duplicate work
- Break large features into smaller, focused PRs

## Guidelines

### Code Quality
- Ensure cross-platform compatibility (iOS, Android)
- Write clean, well-commented TypeScript code
- Follow existing code patterns and conventions
- Run `npm run type-check` and `npm run lint` before committing

### Pull Requests
1. Fork the repository
2. Create a feature branch from `dev`
3. Make your changes with clear, descriptive commits
4. Test on at least one platform (iOS/Android/Web)
5. Submit PR to the `dev` branch
6. Address any review comments

### PR Checklist
- [ ] Code is TypeScript with proper types
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Tested on at least one platform
- [ ] Accessibility considered (screen readers, labels)
- [ ] Comments added for complex logic
- [ ] 3rd party code properly attributed

## Project Standards

**TypeScript**: Use strict mode, avoid `any` types
**State**: Use Zustand hooks (`useUser`, `useTheme`, `useCaughtFish`)
**API Calls**: Use React Query hooks from `src/api/hooks/`
**Components**: Add accessibility props (`accessibilityLabel`, `accessibilityHint`)
**Styling**: Use theme values from `src/features/theme/themes.ts`

## First Time Contributing?

Learn from this free series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Code of Conduct

Be welcoming and respectful. See the [Python Community Code of Conduct](https://www.python.org/psf/codeofconduct/) for guidance.

## Questions?

Open an issue or check [SUPPORT.md](SUPPORT.md) for help.

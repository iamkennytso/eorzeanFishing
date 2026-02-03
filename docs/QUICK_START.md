# Quick Start

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

Then press:
- `a` for Android
- `i` for iOS
- `w` for web

## Development Commands

```bash
npm run type-check  # TypeScript validation
npm run lint        # ESLint
npm test            # Run tests
```

## Tech Stack

- **TypeScript** - Type safety and better IDE support
- **Zustand** - Lightweight state management with automatic persistence
- **React Query** - API calls with caching, retries, and error handling
- **Error Boundaries** - Graceful error handling
- **Accessibility** - Full screen reader support

## Project Structure

```
src/
├── api/              # API layer with React Query hooks
├── data/             # Game data (fish, pools, baits, locations, servers)
├── features/
│   ├── fishing/     # Fishing-related views (7 views)
│   ├── profile/     # Profile views (2 views)
│   └── theme/       # Theme configuration
├── shared/
│   ├── components/  # Reusable components (7 components)
│   └── utils/       # Helper functions
├── store/           # Zustand state management
├── types/           # TypeScript type definitions
└── util/            # Utility functions (imageMap)

assets/              # Images and fonts
```

## Key Features

1. **Performance** - Optimized re-renders with selective state subscriptions
2. **Error Handling** - User-friendly error messages with retry buttons
3. **Persistence** - User data, caught fish, and theme preferences auto-save
4. **Type Safety** - IDE catches bugs before runtime

## Development Workflow

1. Make code changes
2. Run `npm run type-check` to verify TypeScript
3. Test in Expo (`npm start`)
4. Commit changes

## Need Help?

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

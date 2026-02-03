# Eorzean Fishing

A React Native app providing easy access to Final Fantasy XIV fishing information.

**Currently supports**: A Realm Reborn (ARR) content

## Status

- **iOS**: [Live on App Store](https://apps.apple.com/app/id1643096420) (v1.0.1)
- **Android**: In Review

## Quick Start

```bash
npm install
npm start
```

Then press `a` for Android, `i` for iOS, or `w` for web.

## Tech Stack

- React Native with Expo
- TypeScript (strict mode)
- Zustand for state management
- React Query for API calls
- Full accessibility support

## Documentation

- [Quick Start Guide](docs/QUICK_START.md)
- [Contributing Guidelines](docs/CONTRIBUTING.md)
- [Support](docs/SUPPORT.md)

## Development

```bash
npm run type-check  # TypeScript validation
npm run lint        # ESLint
npm test            # Jest tests
```

## Project Structure

```
src/
├── api/           # API layer with React Query
├── data/          # Game data (fish, pools, baits, locations, servers)
├── features/      # Feature modules (fishing, profile, theme)
├── shared/        # Shared components and utilities
├── store/         # Zustand state management
├── types/         # TypeScript definitions
└── util/          # Utility functions (imageMap)

assets/            # Images and fonts
```

## Credits

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.

All in-game graphics are property of SQUARE ENIX CO., LTD. All Rights Reserved.

"Eorzean Fishing" is a non-official application and is not affiliated with Square Enix Holdings Co., Ltd.

# 🚀 Mobile Template

A modern, feature-rich React Native mobile application template built with Expo, designed to kickstart your next mobile project with best practices and essential features out of the box.

## ✨ Features

- 📱 **Expo-powered** - Leverage the power of Expo for seamless development and deployment
- 🌐 **Internationalization** - Built-in i18n support with react-i18next
- 🎨 **Modern UI** - Powered by Tamagui for beautiful, performant components
- 📦 **State Management** - Efficient state management with Zustand
- 🛣️ **Type-safe Routing** - File-based routing with expo-router
- 📱 **Cross-platform** - Works on iOS, Android, and Web
- 🔍 **TypeScript** - Full TypeScript support for better development experience
- 🧪 **Testing Ready** - Jest configuration included for testing

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm, yarn, or bun
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mobileTemplate.git
cd mobileTemplate
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
```

3. Start the development server:

```bash
npm start
# or
yarn start
# or
bun start
```

## 📱 Running the App

- **iOS**: Press `i` in the terminal or run `npm run ios`
- **Android**: Press `a` in the terminal or run `npm run android`
- **Web**: Press `w` in the terminal or run `npm run web`

## 🏗️ Project Structure

This project follows [Expo Router best practices](https://expo.dev/blog/expo-app-folder-structure-best-practices) with a clear, scalable folder structure organized under `src/`:

```
├── assets/                # Static assets (images, fonts, etc.)
├── src/
│   ├── app/              # Expo Router routes (file-based routing)
│   │   ├── (tabs)/       # Tab navigation routes
│   │   │   ├── index.tsx # Route that imports HomeScreen
│   │   │   └── two.tsx   # Route that imports TabTwoScreen
│   │   └── _layout.tsx   # Root layout
│   ├── screens/          # Screen components (returned from app routes)
│   │   ├── Home/
│   │   │   └── index.tsx # Home screen component
│   │   └── Two/
│   │       └── index.tsx # Tab two screen component
│   ├── components/        # Reusable UI components
│   │   ├── PrimaryButton.tsx    # Example: Primary button component
│   │   ├── SecondaryButton.tsx  # Example: Secondary button component
│   │   └── index.ts      # Component exports
│   ├── hooks/            # Custom React hooks
│   │   ├── useCounter.ts # Example: Counter hook
│   │   └── index.ts      # Hook exports
│   ├── utils/            # Utility functions
│   │   ├── formatDate.ts      # Example: Date formatting utilities
│   │   ├── validateEmail.ts   # Example: Validation utilities
│   │   └── index.ts      # Utility exports
│   ├── server/           # Server/API code (used in /api routes)
│   │   ├── userApi.ts    # User-related API calls
│   │   └── index.ts      # Server exports
│   ├── services/         # Business logic layer
│   │   ├── userService.ts # Example: User service with business logic
│   │   └── index.ts      # Service exports
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts      # Type exports
│   ├── lib/              # Third-party library wrappers
│   │   └── apiClient.ts  # API client wrapper
│   ├── config/           # Application configuration
│   │   └── appConfig.ts  # App-wide settings
│   ├── constants/        # App constants (colors, etc.)
│   │   └── Colors.ts
│   └── language/         # Internationalization files
│       └── i18n/         # i18n configuration and locales
├── app.json              # Expo configuration
└── package.json          # Dependencies
```

### 📋 Architecture Flow

The app follows a clear data flow pattern:

**Screen → Components/Hooks → Services → Server/API → Backend**

1. **App Routes** (`src/app/`) - Expo Router route files that import and return screen components
2. **Screens** (`src/screens/`) - Screen components that contain the UI logic
3. **Components** (`src/components/`) - Reusable UI components
4. **Hooks** (`src/hooks/`) - Custom React hooks for stateful logic
5. **Services** (`src/services/`) - Business logic layer that uses server/API
6. **Server** (`src/server/`) - API endpoints that use the API client
7. **Lib** (`src/lib/`) - Third-party library wrappers (API client, etc.)
8. **Utils** (`src/utils/`) - Pure utility functions
9. **Config** (`src/config/`) - Application configuration

### 🎯 Example Usage

Check out `src/screens/Home/index.tsx` to see a complete example demonstrating:

- Using custom hooks (`useCounter`)
- Using reusable components (`PrimaryButton`, `SecondaryButton`)
- Using utility functions (`formatDate`, `validateEmail`)
- Using services (`userService`)
- Using configuration (`appConfig`)

The route file `src/app/(tabs)/index.tsx` shows how app routes import and return screen components.

Each file includes detailed comments explaining its purpose and usage.

## 🛠️ Built With

- [Expo](https://expo.dev/) - React Native framework
- [Tamagui](https://tamagui.dev/) - UI component library
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [i18next](https://www.i18next.com/) - Internationalization
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/mobileTemplate/issues).

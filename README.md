# NanoSat Tracker App

A React Native Expo app for tracking satellites with a clean, modern structure and TypeScript support.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm start
   # or
   expo start
   ```

2. Use the Expo Go app on your phone to scan the QR code, or:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## 📱 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start on Android device/emulator
- `npm run ios` - Start on iOS device/simulator
- `npm run web` - Start on web browser

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Custom button component
│   ├── Card.tsx        # Card container component
│   └── index.ts        # Component exports
├── screens/            # Screen components
│   ├── HomeScreen.tsx  # Home/welcome screen
│   ├── ProfileScreen.tsx # User profile screen
│   ├── SettingsScreen.tsx # App settings screen
│   └── index.ts        # Screen exports
├── navigation/         # Navigation setup
│   ├── TabNavigator.tsx # Bottom tab navigation
│   └── index.ts        # Navigation exports
├── constants/          # App constants
│   └── index.ts        # Colors, spacing, typography
├── types/              # TypeScript type definitions
│   └── index.ts        # Type exports
├── hooks/              # Custom React hooks
│   ├── useTheme.ts     # Theme management hook
│   └── index.ts        # Hook exports
└── utils/              # Utility functions
    ├── formatters.ts   # Data formatting utilities
    └── index.ts        # Utility exports
```

## 🎨 Features

### Current Features

- **Clean Architecture**: Well-organized folder structure with TypeScript support
- **Navigation**: Bottom tab navigation with 3 main screens
- **Reusable Components**: Custom Button and Card components
- **Theming**: Consistent design system with colors, spacing, and typography
- **Modern UI**: Clean, professional interface design

### Screens

1. **Home Screen**
   - Welcome message and app introduction
   - Feature highlights
   - Call-to-action buttons

2. **Profile Screen**
   - User information display
   - User statistics
   - Profile management options

3. **Settings Screen**
   - App preferences with toggles
   - Data usage information
   - About section

### Components

- **Button**: Customizable button with different variants (primary, secondary, outline) and sizes
- **Card**: Container component with shadow and customizable padding/margin

## 🛠️ Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation library
- **Expo Vector Icons**: Icon library

## 🎯 Next Steps

Here are some suggested improvements and additions:

### Features to Add
- [ ] Satellite tracking functionality
- [ ] Map integration
- [ ] Real-time satellite data
- [ ] User authentication
- [ ] Push notifications
- [ ] Dark mode implementation
- [ ] Location services
- [ ] Offline data caching

### Technical Improvements
- [ ] State management (Redux Toolkit or Zustand)
- [ ] API integration
- [ ] Error handling
- [ ] Loading states
- [ ] Unit tests
- [ ] E2E tests
- [ ] Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you encounter any issues or have questions, please create an issue in the repository or contact the development team.

---

Built with ❤️ using React Native and Expo 
# NanoSat Tracker App

A React Native Expo app for tracking FloripaSat-1 satellite data with real-time charts, mission information, and ham radio collaborator details.

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
│   ├── AnimatedBox.tsx # Animated box for ham radio data
│   └── index.ts        # Component exports
├── screens/            # Screen components (6 tabs)
│   ├── HomeScreen.tsx  # Mission overview with satellite cards
│   ├── FloripaSat1Screen.tsx # Satellite mission details
│   ├── BatteryScreen.tsx # Battery telemetry charts
│   ├── SolarPanelsScreen.tsx # Solar panel data charts
│   ├── OverallScreen.tsx # Ham radio collaborators
│   ├── ProfileScreen.tsx # User profile
│   └── index.ts        # Screen exports
├── navigation/         # Navigation setup
│   ├── TabNavigator.tsx # 6-tab bottom navigation
│   └── index.ts        # Navigation exports
├── constants/          # App constants
│   └── index.ts        # Colors, spacing, typography
├── types/              # TypeScript type definitions
│   └── index.ts        # Type exports for navigation & data
├── hooks/              # Custom React hooks
│   ├── useTheme.ts     # Theme management hook
│   └── index.ts        # Hook exports
└── utils/              # Utility functions
    ├── formatters.ts   # Data formatting utilities
    └── index.ts        # Utility exports
```

## 🎨 Features

### Current Features

- **6-Tab Navigation**: Complete satellite tracking interface
- **Real-time Data Charts**: Battery and solar panel telemetry visualization
- **Mission Information**: Detailed FloripaSat-1 satellite specs and modules
- **Ham Radio Network**: Global collaborator map and information
- **TypeScript Support**: Type-safe development with proper interfaces
- **Modern UI**: Clean interface with Tailwind CSS styling
- **API Integration**: Live data from FloripaSat-1 backend

### Tabs Overview

1. **Home Tab**
   - Mission overview and satellite constellation
   - Links to SpaceLab GitHub
   - Satellite cards with descriptions

2. **FloripaSat-1 Tab**
   - Detailed mission information
   - Module specifications (EPS, TT&C, OBDH)
   - Educational content about the satellite

3. **Battery Tab**
   - Real-time battery voltage charts (Cell 1 & 2)
   - Battery charge and current monitoring
   - Temperature tracking with interactive graphs

4. **Solar Panels Tab**
   - 6 solar panel current monitoring
   - Voltage tracking for panel pairs
   - Multi-line charts with color coding

5. **Overall Tab**
   - Global ham radio collaborator map
   - Mission appreciation and community thanks
   - Animated collaborator information box

6. **Profile Tab**
   - Simple user profile interface
   - Ready for user authentication features

## 🛠️ Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: 6-tab bottom navigation
- **NativeWind**: Tailwind CSS for React Native
- **React Native Gifted Charts**: Interactive data visualization
- **Expo Vector Icons**: Icon library
- **SafeAreaView**: Safe area handling

## 📊 Data Visualization

The app displays real-time satellite telemetry including:

- **Battery Data**: Cell voltages, charge levels, current, and temperature
- **Solar Panel Data**: Individual panel currents and grouped voltages
- **Interactive Charts**: Scrollable, animated line charts with month navigation
- **Live API**: Data fetched from `nanosattracker-backend.onrender.com`

## 🎯 API Integration

The app connects to the FloripaSat-1 backend to fetch:
- Battery telemetry data
- Solar panel performance metrics
- Historical data with date formatting
- Real-time satellite status information

## 🔧 Configuration

### Tailwind CSS (NativeWind)
The app uses NativeWind for styling with custom colors:
- Primary: `#161622` (dark blue)
- Secondary: `#FF9C01` (orange)
- Blue variants for satellite theme
- Custom font families (Poppins)

### Chart Configuration
- Interactive month selection buttons
- Scrollable chart views with references
- Multiple data series support
- Animated chart rendering

## 🌍 Ham Radio Integration

Special thanks to the global ham radio community that supports the FloripaSat-1 mission by:
- Receiving satellite telemetry
- Relaying communication signals
- Supporting emergency communications
- Contributing to space education

## 🚀 Next Steps

### Planned Features
- [ ] Real-time satellite pass predictions
- [ ] Ground station tracking
- [ ] Push notifications for satellite passes
- [ ] User authentication and personal tracking
- [ ] Offline data caching
- [ ] Additional satellite missions
- [ ] 3D satellite visualization
- [ ] Historical data analysis

### Technical Improvements
- [ ] Error boundary implementation
- [ ] Loading state optimizations
- [ ] Chart performance optimization
- [ ] Automated testing
- [ ] CI/CD pipeline
- [ ] App store deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on multiple devices
5. Submit a pull request

## 🏫 Educational Context

This app is developed in collaboration with:
- **SpaceLab UFSC**: Federal University of Santa Catarina
- **FloripaSat-1 Mission**: Student-built CubeSat project
- **Amateur Radio Community**: Global volunteer network

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For issues, questions, or contributions:
- Create an issue in the repository
- Contact the SpaceLab team
- Visit: https://github.com/spacelab-ufsc

---

Built with ❤️ for space education and FloripaSat-1 mission support 
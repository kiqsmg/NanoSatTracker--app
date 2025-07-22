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
│   ├── AnimatedBox.tsx # Ham radio collaborators animation
│   └── Layout.tsx      # Base layout component
├── screens/             # App screens/pages
│   ├── HomeScreen.tsx           # Welcome & satellite overview
│   ├── BatteryScreen.tsx        # Battery telemetry charts
│   ├── FloripaSat1Screen.tsx    # Mission & module details
│   ├── SolarPanelsScreen.tsx    # Solar panel data charts
│   ├── OverallScreen.tsx        # World map & collaborators
│   └── ProfileScreen.tsx        # Team information
├── navigation/          # Navigation configuration
│   └── TabNavigator.tsx # Bottom tab navigation
├── types/              # TypeScript type definitions
├── constants/          # App constants and themes
├── hooks/             # Custom React hooks
└── utils/             # Utility functions
```

## 🛰️ Features

### Multi-Tab Navigation
- **Home**: Mission overview and satellite cards
- **FloripaSat-1**: Technical details and module information
- **Battery**: Real-time battery telemetry charts
- **Solar Panels**: Solar panel performance visualization
- **Overall**: World map showing ham radio collaborators
- **Profile**: Team and institutional information

### Real-Time Data
- Live satellite telemetry from FloripaSat-1
- Battery voltage, current, temperature, and charge levels
- Solar panel current and voltage measurements
- Interactive charts with month navigation

### Educational Content
- Detailed mission information
- Technical specifications of satellite modules
- Ham radio community involvement
- SpaceLab UFSC research showcase

## 🎨 Design System

### Layout Components
- **Layout**: Base layout with SafeAreaView and optional ScrollView
- **ChartLayout**: Specialized layout for data visualization screens
- **ContentLayout**: Layout for informational content screens

### Color Scheme
- **Primary**: Space-themed dark backgrounds
- **Accent**: Blue tones for highlights and data
- **Text**: High contrast for readability

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable font sizes with proper line height
- **Data**: Monospace for numerical values

## 📊 Data Integration

### API Endpoints
- **FloripaSat-1 Downlink**: `https://nanosattracker-backend.onrender.com/floripasat1/downlink`

### Data Types
- Battery telemetry (voltage, current, temperature, charge)
- Solar panel measurements (current, voltage per panel)
- Timestamp information (day, month, year)

### Chart Library
- **react-native-gifted-charts**: Interactive line charts
- Month navigation and data filtering
- Multi-series data visualization

## 🔧 Technical Stack

### Core Technologies
- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: App navigation solution

### Dependencies
```json
{
  "@react-navigation/bottom-tabs": "Tab navigation",
  "@react-navigation/native": "Core navigation",
  "react-native-gifted-charts": "Data visualization",
  "react-native-safe-area-context": "Safe area handling",
  "expo-linear-gradient": "Gradient backgrounds",
  "@expo/vector-icons": "Icon library"
}
```

### Development Tools
- **Expo CLI**: Development server and build tools
- **Metro**: JavaScript bundler for React Native
- **ESLint**: Code linting and formatting

## 🏛️ Educational Context

### Academic Mission
This app serves as a educational tool and research showcase for:
- **SpaceLab UFSC**: Federal University of Santa Catarina research lab
- **FloripaSat-1**: Brazil's first student-built CubeSat
- **Space Technology**: Hands-on learning for engineering students
- **Amateur Radio**: Community involvement in space missions

### Learning Objectives
- Real-world application of mobile development
- Space systems and satellite technology understanding
- Data visualization and user interface design
- Collaborative development with research institutions

## 🌟 Mission Impact

### FloripaSat-1 Achievements
- **First Brazilian student CubeSat** successfully deployed
- **Amateur radio repeater** for emergency communications
- **International collaboration** with ham radio operators
- **Technology demonstration** for future missions

### Educational Outcomes
- **Student engagement** in space technology
- **Public outreach** for STEM education
- **Open source contribution** to satellite tracking
- **Community building** around space exploration

## 🤝 Contributing

We welcome contributions from:
- **Students and researchers** interested in space technology
- **Mobile developers** wanting to contribute to education
- **Amateur radio operators** with satellite experience
- **UI/UX designers** passionate about space-themed interfaces

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🎯 Future Enhancements

### Planned Features
- **Real-time tracking**: Live satellite position on map
- **Prediction algorithms**: Pass prediction for ham radio operators
- **Data export**: CSV/JSON export for research
- **Multi-language**: Portuguese and English support
- **Offline mode**: Cached data for remote areas

### Technical Improvements
- **Performance optimization**: Chart rendering improvements
- **Data caching**: Smart cache management
- **Push notifications**: Satellite pass alerts
- **Advanced analytics**: Historical data analysis

## 🔗 Related Projects

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

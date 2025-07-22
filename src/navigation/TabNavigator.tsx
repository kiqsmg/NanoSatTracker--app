import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { 
  BatteryScreen, 
  FloripaSat1Screen, 
  HomeScreen, 
  OverallScreen, 
  ProfileScreen, 
  SolarPanelsScreen 
} from '../screens';
import { TabParamList } from '../types';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'FloripaSat1':
              iconName = focused ? 'planet' : 'planet-outline';
              break;
            case 'Battery':
              iconName = focused ? 'battery-full' : 'battery-full-outline';
              break;
            case 'SolarPanels':
              iconName = focused ? 'sunny' : 'sunny-outline';
              break;
            case 'Overall':
              iconName = focused ? 'earth' : 'earth-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#E1E1E1',
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: '#FFFFFF',
          borderBottomColor: '#E1E1E1',
          borderBottomWidth: 1,
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          color: '#000000',
        },
        headerTintColor: '#007AFF',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerTitle: 'NanoSat Tracker',
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="FloripaSat1" 
        component={FloripaSat1Screen}
        options={{
          headerTitle: 'FloripaSat-1',
          tabBarLabel: 'Satellite',
        }}
      />
      <Tab.Screen 
        name="Battery" 
        component={BatteryScreen}
        options={{
          headerTitle: 'Battery Data',
          tabBarLabel: 'Battery',
        }}
      />
      <Tab.Screen 
        name="SolarPanels" 
        component={SolarPanelsScreen}
        options={{
          headerTitle: 'Solar Panels',
          tabBarLabel: 'Solar',
        }}
      />
      <Tab.Screen 
        name="Overall" 
        component={OverallScreen}
        options={{
          headerTitle: 'Mission Data',
          tabBarLabel: 'Overall',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}; 
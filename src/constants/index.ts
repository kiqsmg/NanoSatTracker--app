// Colors
export const Colors = {
  primary: '#007AFF',
  secondary: '#FF3B30',
  background: '#F8F9FA',
  surface: '#FFFFFF',
  text: {
    primary: '#000000',
    secondary: '#666666',
    light: '#999999',
  },
  border: '#E1E1E1',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
} as const;

// Spacing
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Typography
export const Typography = {
  fontSize: {
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 32,
  },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
} as const;

// App Info
export const AppInfo = {
  name: 'NanoSat Tracker',
  version: '1.0.0',
} as const; 
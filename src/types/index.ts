// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Common types
export interface CommonProps {
  children?: React.ReactNode;
  style?: any;
} 
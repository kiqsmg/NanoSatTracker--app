// Navigation types
export type RootStackParamList = {
    Battery: undefined;
    FloripaSat1: undefined;
    Home: undefined;
    Overall: undefined;
    Profile: undefined;
    SolarPanels: undefined;
  };
  
  export type TabParamList = {
    Battery: undefined;
    FloripaSat1: undefined;
    Home: undefined;
    Overall: undefined;
    Profile: undefined;
    SolarPanels: undefined;
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
  
  // Satellite data types
  export interface SatelliteData {
    day: number;
    month: number;
    year: number;
    battery_cell_1_voltage: number;
    battery_cell_2_voltage: number;
    battery_temperature: number;
    battery_charge: number;
    battery_current: number;
    sp_01_current: number;
    sp_02_current: number;
    sp_03_current: number;
    sp_04_current: number;
    sp_05_current: number;
    sp_06_current: number;
    sp_01_02_voltage: number;
    sp_03_04_voltage: number;
    sp_05_06_voltage: number;
  }
  
  export interface ChartDataPoint {
    value: number;
    label: string;
  }
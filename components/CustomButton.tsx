import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle | TextStyle[];
  isLoading?: boolean;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        containerStyles,
        (isLoading || disabled) && styles.buttonDisabled,
      ]}
      disabled={isLoading || disabled}
    >
      <Text style={[styles.text, textStyles, (isLoading || disabled) && styles.textDisabled]}>
        {isLoading ? 'Loading...' : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonDisabled: {
    backgroundColor: '#6B7280',
    shadowOpacity: 0,
    elevation: 0,
  },
  text: {
    fontFamily: 'System',
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  textDisabled: {
    color: '#9CA3AF',
  },
});

export default CustomButton; 
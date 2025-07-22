import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Spacing } from '../constants';
import { CommonProps } from '../types';

interface CardProps extends CommonProps {
  padding?: 'small' | 'medium' | 'large';
  margin?: 'small' | 'medium' | 'large';
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 'medium',
  margin = 'medium',
  shadow = true,
}) => {
  const cardStyle = [
    styles.card,
    styles[padding],
    styles[`${margin}Margin`],
    shadow && styles.shadow,
    style,
  ];

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  // Padding
  small: {
    padding: Spacing.md,
  },
  medium: {
    padding: Spacing.lg,
  },
  large: {
    padding: Spacing.xl,
  },

  // Margin
  smallMargin: {
    margin: Spacing.sm,
  },
  mediumMargin: {
    margin: Spacing.md,
  },
  largeMargin: {
    margin: Spacing.lg,
  },

  // Shadow
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 
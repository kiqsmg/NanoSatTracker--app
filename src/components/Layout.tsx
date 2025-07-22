import React from 'react';
import { View, Text, ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonProps } from '../types';

interface LayoutProps extends CommonProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  showScrollView?: boolean;
  contentStyle?: ViewStyle;
  headerStyle?: ViewStyle;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  subtitle,
  backgroundColor = '#000000',
  showScrollView = true,
  style,
  contentStyle,
  headerStyle,
}) => {
  const containerStyle = [
    styles.container,
    { backgroundColor },
    style,
  ];

  const content = (
    <View style={[styles.content, contentStyle]}>
      {(title || subtitle) && (
        <View style={[styles.header, headerStyle]}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}
      {children}
    </View>
  );

  return (
    <SafeAreaView style={containerStyle}>
      {showScrollView ? (
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8FC7FF',
    textAlign: 'center',
    fontWeight: '500',
  },
}); 
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from '../components';
import { Colors, Spacing, Typography, AppInfo } from '../constants';

export const HomeScreen: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get Started pressed!');
  };

  const handleLearnMore = () => {
    console.log('Learn More pressed!');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.appName}>{AppInfo.name}</Text>
        <Text style={styles.subtitle}>
          Your satellite tracking companion
        </Text>
      </View>

      <Card style={styles.featuresCard}>
        <Text style={styles.cardTitle}>Features</Text>
        <View style={styles.feature}>
          <Text style={styles.featureTitle}>🛰️ Real-time Tracking</Text>
          <Text style={styles.featureDescription}>
            Track satellites in real-time with precision
          </Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureTitle}>📍 Location Services</Text>
          <Text style={styles.featureDescription}>
            Find satellites visible from your location
          </Text>
        </View>
        <View style={styles.feature}>
          <Text style={styles.featureTitle}>📊 Data Analytics</Text>
          <Text style={styles.featureDescription}>
            Comprehensive satellite data and analytics
          </Text>
        </View>
      </Card>

      <View style={styles.actions}>
        <Button
          title="Get Started"
          onPress={handleGetStarted}
          variant="primary"
          size="large"
          style={styles.primaryButton}
        />
        <Button
          title="Learn More"
          onPress={handleLearnMore}
          variant="outline"
          size="medium"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: Spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
    paddingTop: Spacing.xl,
  },
  title: {
    fontSize: Typography.fontSize.large,
    color: Colors.text.secondary,
    marginBottom: Spacing.xs,
  },
  appName: {
    fontSize: Typography.fontSize.xxlarge,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  subtitle: {
    fontSize: Typography.fontSize.medium,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  featuresCard: {
    marginBottom: Spacing.xl,
  },
  cardTitle: {
    fontSize: Typography.fontSize.large,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  feature: {
    marginBottom: Spacing.lg,
  },
  featureTitle: {
    fontSize: Typography.fontSize.medium,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  featureDescription: {
    fontSize: Typography.fontSize.medium,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  actions: {
    gap: Spacing.md,
  },
  primaryButton: {
    marginBottom: Spacing.md,
  },
}); 
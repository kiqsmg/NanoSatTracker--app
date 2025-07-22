import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from '../components';
import { Colors, Spacing, Typography } from '../constants';

export const ProfileScreen: React.FC = () => {
  const handleEditProfile = () => {
    console.log('Edit Profile pressed!');
  };

  const handleChangePassword = () => {
    console.log('Change Password pressed!');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <Card style={styles.infoCard}>
        <Text style={styles.cardTitle}>Profile Information</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>John Doe</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>john.doe@example.com</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>San Francisco, CA</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Member Since:</Text>
          <Text style={styles.value}>January 2024</Text>
        </View>
      </Card>

      <Card style={styles.statsCard}>
        <Text style={styles.cardTitle}>Your Stats</Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Satellites Tracked</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Days Active</Text>
          </View>
        </View>
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Favorite Satellites</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>127</Text>
            <Text style={styles.statLabel}>Total Observations</Text>
          </View>
        </View>
      </Card>

      <View style={styles.actions}>
        <Button
          title="Edit Profile"
          onPress={handleEditProfile}
          variant="primary"
          size="medium"
        />
        <Button
          title="Change Password"
          onPress={handleChangePassword}
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
    paddingTop: Spacing.lg,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  avatarText: {
    fontSize: Typography.fontSize.xlarge,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.surface,
  },
  name: {
    fontSize: Typography.fontSize.xlarge,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  email: {
    fontSize: Typography.fontSize.medium,
    color: Colors.text.secondary,
  },
  infoCard: {
    marginBottom: Spacing.lg,
  },
  statsCard: {
    marginBottom: Spacing.xl,
  },
  cardTitle: {
    fontSize: Typography.fontSize.large,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  label: {
    fontSize: Typography.fontSize.medium,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.text.secondary,
  },
  value: {
    fontSize: Typography.fontSize.medium,
    color: Colors.text.primary,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: Spacing.lg,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: Typography.fontSize.xlarge,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.primary,
    marginBottom: Spacing.xs,
  },
  statLabel: {
    fontSize: Typography.fontSize.small,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  actions: {
    gap: Spacing.md,
  },
}); 
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { Button, Card } from '../components';
import { Colors, Spacing, Typography, AppInfo } from '../constants';

export const SettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(true);

  const handleSaveSettings = () => {
    console.log('Settings saved!');
  };

  const handleResetSettings = () => {
    console.log('Settings reset to defaults!');
    setNotificationsEnabled(true);
    setLocationEnabled(true);
    setDarkModeEnabled(false);
    setAutoRefreshEnabled(true);
  };

  const handleAbout = () => {
    console.log('About pressed!');
  };

  const handleSupport = () => {
    console.log('Support pressed!');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card style={styles.settingsCard}>
        <Text style={styles.cardTitle}>App Preferences</Text>
        
        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Push Notifications</Text>
            <Text style={styles.settingDescription}>
              Receive alerts for satellite passes
            </Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: Colors.border, true: Colors.primary }}
            thumbColor={Colors.surface}
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Location Services</Text>
            <Text style={styles.settingDescription}>
              Use your location for precise tracking
            </Text>
          </View>
          <Switch
            value={locationEnabled}
            onValueChange={setLocationEnabled}
            trackColor={{ false: Colors.border, true: Colors.primary }}
            thumbColor={Colors.surface}
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Text style={styles.settingDescription}>
              Switch to dark theme
            </Text>
          </View>
          <Switch
            value={darkModeEnabled}
            onValueChange={setDarkModeEnabled}
            trackColor={{ false: Colors.border, true: Colors.primary }}
            thumbColor={Colors.surface}
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Auto Refresh</Text>
            <Text style={styles.settingDescription}>
              Automatically update satellite data
            </Text>
          </View>
          <Switch
            value={autoRefreshEnabled}
            onValueChange={setAutoRefreshEnabled}
            trackColor={{ false: Colors.border, true: Colors.primary }}
            thumbColor={Colors.surface}
          />
        </View>
      </Card>

      <Card style={styles.dataCard}>
        <Text style={styles.cardTitle}>Data & Privacy</Text>
        
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Data Usage:</Text>
          <Text style={styles.dataValue}>45.2 MB this month</Text>
        </View>
        
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Cache Size:</Text>
          <Text style={styles.dataValue}>12.8 MB</Text>
        </View>
        
        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Last Sync:</Text>
          <Text style={styles.dataValue}>2 minutes ago</Text>
        </View>
      </Card>

      <Card style={styles.aboutCard}>
        <Text style={styles.cardTitle}>About</Text>
        
        <View style={styles.aboutRow}>
          <Text style={styles.aboutLabel}>App Version:</Text>
          <Text style={styles.aboutValue}>{AppInfo.version}</Text>
        </View>
        
        <View style={styles.aboutRow}>
          <Text style={styles.aboutLabel}>Build:</Text>
          <Text style={styles.aboutValue}>2024.01.15</Text>
        </View>
        
        <View style={styles.aboutRow}>
          <Text style={styles.aboutLabel}>Developer:</Text>
          <Text style={styles.aboutValue}>Your Company</Text>
        </View>
      </Card>

      <View style={styles.actions}>
        <Button
          title="Save Settings"
          onPress={handleSaveSettings}
          variant="primary"
          size="medium"
        />
        <Button
          title="Reset to Defaults"
          onPress={handleResetSettings}
          variant="outline"
          size="medium"
        />
        <Button
          title="About App"
          onPress={handleAbout}
          variant="secondary"
          size="medium"
        />
        <Button
          title="Contact Support"
          onPress={handleSupport}
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
  settingsCard: {
    marginBottom: Spacing.lg,
  },
  dataCard: {
    marginBottom: Spacing.lg,
  },
  aboutCard: {
    marginBottom: Spacing.xl,
  },
  cardTitle: {
    fontSize: Typography.fontSize.large,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  settingInfo: {
    flex: 1,
    marginRight: Spacing.md,
  },
  settingLabel: {
    fontSize: Typography.fontSize.medium,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  settingDescription: {
    fontSize: Typography.fontSize.small,
    color: Colors.text.secondary,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  dataLabel: {
    fontSize: Typography.fontSize.medium,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.text.secondary,
  },
  dataValue: {
    fontSize: Typography.fontSize.medium,
    color: Colors.text.primary,
  },
  aboutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  aboutLabel: {
    fontSize: Typography.fontSize.medium,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.text.secondary,
  },
  aboutValue: {
    fontSize: Typography.fontSize.medium,
    color: Colors.text.primary,
  },
  actions: {
    gap: Spacing.md,
  },
}); 
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const profile_img = require('../../assets/images/profile.jpg');
const logo_img = require('../../assets/images/logo.png');

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Profile</Text>
          
          <View style={styles.profileImageContainer}>
            <Image 
              source={profile_img}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>
          
          <Text style={styles.profileName}>SpaceLab UFSC</Text>
          <Text style={styles.profileSubtitle}>Satellite Tracking Team</Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Mission</Text>
            <Text style={styles.infoText}>
              Making space more accessible to the scientific community and industry through innovative nanosatellite projects and research.
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Institution</Text>
            <Text style={styles.infoText}>
              Federal University of Santa Catarina (UFSC), Brazil
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Projects</Text>
            <Text style={styles.infoText}>
              • FloripaSat-1 (1U CubeSat){"\n"}
              • GOLDS-UFSC (2U CubeSat){"\n"}
              • Catarina Constellation{"\n"}
              • GOMX-5 Mission
            </Text>
          </View>

          <View style={styles.logoContainer}>
            <Image 
              source={logo_img}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  headerSection: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  pageTitle: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#93c5fd',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profileSubtitle: {
    fontSize: 16,
    color: '#93c5fd',
    fontWeight: '600',
  },
  infoSection: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  infoCard: {
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    color: '#2563eb',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#93c5fd',
    fontWeight: '600',
    lineHeight: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
});

export default ProfileScreen; 
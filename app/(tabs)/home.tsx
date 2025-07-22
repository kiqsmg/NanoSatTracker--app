import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const cubesatBackground = require('../../assets/images/cubesat_background.webp');
const floripasat2_img = require('../../assets/images/FloripaSat2.png');
const floripasat1_img = require('../../assets/images/FloripaSat1.png');

export default function Home() {
  const openGitHubLink = () => {
    Linking.openURL('https://github.com/spacelab-ufsc');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <ImageBackground 
            source={cubesatBackground} 
            style={styles.heroBackground}
            resizeMode="cover"
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
              style={styles.heroGradient}
            >
              <View style={styles.heroContent}>
                <Text style={styles.heroTitle}>
                  NanoSatTracker
                </Text>
                <Text style={styles.heroSubtitle}>
                  Spacelab - NanoSatTracker
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Overview Section */}
        <View style={styles.overviewSection}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.overviewText}>
            SpaceLab brings together several research groups from the Federal University of Santa Catarina (UFSC), Brazil. The different groups conduct research and development activities in space systems in general, aiming to make space more accessible not only to the scientific community but also to the industry. Featured missions include FloripaSat-1, GOLDS-UFSC, GOMX-5, and cubesats from the Catarina Constellation. This organization combines repositories for different projects, files and documents.
          </Text>
          
          <TouchableOpacity 
            onPress={openGitHubLink}
            style={styles.githubButton}
          >
            <Text style={styles.githubButtonText}>GitHub</Text>
          </TouchableOpacity>
        </View>

        {/* Satellite Cards */}
        <View style={styles.cardsSection}>
          {/* FloripaSat-1 */}
          <View style={styles.satelliteCard}>
            <Text style={styles.satelliteTitle}>FloripaSat-1</Text>
            <Text style={styles.satelliteSubtitle}>1U CubeSat</Text>
            
            <View style={styles.imageContainer}>
              <Image 
                source={floripasat1_img}
                style={styles.satelliteImage}
                resizeMode="contain"
              />
            </View>
            
            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>
                FloripaSat-1 is a platform with five modules including core components for mission control and payloads, featuring an amateur radio repeater for global emergency and rescue communications.
              </Text>
            </View>
          </View>

          {/* GOLDS-UFSC */}
          <View style={styles.satelliteCard}>
            <Text style={styles.satelliteTitle}>GOLDS-UFSC</Text>
            <Text style={styles.satelliteSubtitle}>2U CubeSat</Text>
            
            <View style={styles.imageContainer}>
              <Image 
                source={floripasat2_img}
                style={styles.satelliteImage}
                resizeMode="contain"
              />
            </View>
            
            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>
                GOLDS-UFSC is a service module for INPE's EDC payload, and also a platform for the test of core spacecraft technologies in a microgravity, high-radiation and low Earth orbit environment.
              </Text>
            </View>
          </View>

          {/* Catarina A1 */}
          <View style={styles.satelliteCard}>
            <Text style={styles.satelliteTitle}>Catarina A1</Text>
            <Text style={styles.satelliteSubtitle}>2U CubeSat</Text>
            
            <View style={styles.imageContainer}>
              <Image 
                source={floripasat2_img}
                style={styles.satelliteImage}
                resizeMode="contain"
              />
            </View>
            
            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>
                The Catarina Constellation encompasses a set of satellites with the goal to provide services, mainly, to the civil defence, contributing to the country's sustainable socioeconomic development agenda.
              </Text>
            </View>
          </View>

          {/* Catarina A3 */}
          <View style={styles.satelliteCard}>
            <Text style={styles.satelliteTitle}>Catarina A3</Text>
            <Text style={styles.satelliteSubtitle}>2U CubeSat</Text>
            
            <View style={styles.imageContainer}>
              <Image 
                source={floripasat2_img}
                style={styles.satelliteImage}
                resizeMode="contain"
              />
            </View>
            
            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>
                The Catarina Constellation encompasses a set of satellites with the goal to provide services, mainly, to the civil defence, contributing to the country's sustainable socioeconomic development agenda.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  heroContainer: {
    position: 'relative',
  },
  heroBackground: {
    height: 256,
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  heroContent: {
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#a3a3a3',
  },
  overviewSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  overviewText: {
    fontSize: 16,
    color: '#f3f4f6',
    lineHeight: 24,
    marginBottom: 24,
  },
  githubButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  githubButtonText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 16,
  },
  cardsSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  satelliteCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  satelliteTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  satelliteSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#a3a3a3',
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  satelliteImage: {
    width: 128,
    height: 192,
  },
  descriptionBox: {
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 16,
  },
  descriptionText: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 24,
  },
}); 
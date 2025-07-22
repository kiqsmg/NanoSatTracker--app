import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnimatedBox } from '../../src/components';

const worldMap = require('../../assets/images/worldMap.png');

export default function Overall() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.pageTitle}>FloripaSat-1 mission extra data</Text>
          </View>
          
          <Text style={styles.sectionTitle}>Ham Radio collaborators around the World!</Text>

          <View style={styles.mapContainer}>
            <Image 
              source={worldMap} 
              style={styles.worldMapImage}
              resizeMode="contain"
            />     
          </View>

          <Text style={styles.descriptionText}>
            The Ham radio community plays a crucial part in ensuring the communication, control, and data collection aspects of CubeSat missions.
          </Text>
          <Text style={styles.thanksText}>
            The Spacelab group thanks all Ham Radio operators who collaborated to the FloripaSat-1 mission.
          </Text>

          <View style={styles.collaboratorsSection}>
            <Text style={styles.collaboratorsTitle}>Ham Radio collaborators that helped in the FloripaSat-1 Mission!</Text>
            <AnimatedBox />
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
  pageTitle: {
    marginTop: 40,
    paddingLeft: 8,
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    textAlign: 'center',
    marginTop: 80,
    color: '#93c5fd',
    fontWeight: '600',
    fontSize: 16,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  worldMapImage: {
    width: 320,
    height: 192,
  },
  descriptionText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#93c5fd',
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  thanksText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#93c5fd',
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  collaboratorsSection: {
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  collaboratorsTitle: {
    textAlign: 'center',
    marginTop: 20,
    color: '#93c5fd',
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: 20,
  },
}); 
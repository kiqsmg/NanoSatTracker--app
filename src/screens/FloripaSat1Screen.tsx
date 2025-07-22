import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const floripasat1_img = require('../../assets/images/FloripaSat1.png');
const eps_img = require('../../assets/images/eps_img.png');
const obdh_img = require('../../assets/images/obdh_img.png');
const ttc_img = require('../../assets/images/ttc_img.png');

const FloripaSat1Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.pageTitle}>FloripaSat-1 mission</Text>
        <View style={styles.mainImageContainer}>
          <Image 
            source={floripasat1_img}
            style={styles.mainImage}
            resizeMode="contain"
          />     
        </View>
        
        <View>
          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionText}>
              FloripaSat-1 is a technology demonstration mission entirely developed by SpaceLab UFSC students at the Federal University of Santa Catarina (UFSC), Brazil. It is cube-shaped satellite made of 5 modules. There the core modules for the mission control and the payloads. The core modules developed at UFSC are the On-Board Data Handling (OBDH), the Telemetry, Tracking, and Control (TT&C), the Electric Power System (EPS), and the passive Attitude Control System (ACS). The payload is an amateur radio repeater, which can be used all over the globe in emergency and rescue situations, for instance.
            </Text>
          </View>
        </View>
        
        <View>
          <View style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>EPS</Text>
            <Text style={styles.moduleSubtitle}>Electric Power System</Text>
            <View style={styles.moduleImageContainer}>
              <Image 
                source={eps_img}
                style={styles.moduleImage}
                resizeMode="contain"
              />     
            </View>
            <Text style={styles.moduleDescription}>
              The module is designed to capture, store and distribute power to other FloripaSat-1 modules. The power capture system is based on the conversion of solar energy through six panels located on each face of the satellite structure. The captured energy is stored in two series-connected lithium batteries. From decision-making algorithms, the other satellite modules are fed according to the available battery power at a given time. EPS plays a key role in energy management at different times in orbit, such as when the satellite is in eclipse, with the earth covering the sun.
            </Text>
          </View>
        </View>
        
        <View>
          <View style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>TT&C</Text>
            <Text style={styles.moduleSubtitle}>Telemetry, Tracking and Command</Text>
            <View style={styles.moduleImageContainer}>
              <Image 
                source={ttc_img}
                style={styles.moduleImage}
                resizeMode="contain"
              />     
            </View>
            <Text style={styles.moduleDescription}>
              The module is responsible for satellite communication with the terrestrial segment. It is divided into two sub-modules: "Beacon" and "Main Radio". "Beacon" transmits periodic signals containing satellite identification (ID) and basic telemetry information. "Main Radio" is responsible for receiving remote controls from a control station located on Earth (in this case at the UFSC), and send responses via telemetry. Received remotes are forwarded to OBDH, which performs decoding and the requested processing.
            </Text>
          </View>
        </View>
        
        <View>
          <View style={styles.moduleCard}>
            <Text style={styles.moduleTitle}>OBDH</Text>
            <Text style={styles.moduleSubtitle}>On-Board Data Handling</Text>
            <View style={styles.moduleImageContainer}>
              <Image 
                source={obdh_img}
                style={styles.moduleImage}
                resizeMode="contain"
              />     
            </View>
            <Text style={styles.moduleDescription}>
              The module is responsible for synchronizing actions and data flow between satellite modules (eg, EPS, Payloads, …) and the ground segment. OBDH packs the generated data, and stores it in nonvolatile memory for sending to the ground station as soon as possible (when the satellite is passing over UFSC, or over a partner's ground station). The remote commands sent by the ground segment are received by TT&C and sent to the OBDH which decodes and performs the necessary actions, sending the actions to the other modules if necessary. This allows communication between the entire satellite and the earth.
            </Text>
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
  pageTitle: {
    marginTop: 40,
    paddingLeft: 8,
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  mainImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  mainImage: {
    width: 160,
    height: 320,
  },
  descriptionCard: {
    margin: 20,
    backgroundColor: '#374151',
    padding: 8,
    borderRadius: 12,
  },
  descriptionText: {
    padding: 20,
    fontSize: 18,
    color: '#93c5fd',
    fontWeight: '600',
    lineHeight: 24,
  },
  moduleCard: {
    margin: 20,
    marginTop: 20,
    backgroundColor: '#374151',
    padding: 8,
    borderRadius: 12,
  },
  moduleTitle: {
    marginLeft: 8,
    fontSize: 24,
    color: '#2563eb',
    fontWeight: 'bold',
  },
  moduleSubtitle: {
    marginLeft: 20,
    fontSize: 18,
    color: '#93c5fd',
    fontWeight: '600',
  },
  moduleImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  moduleImage: {
    width: 256,
    height: 256,
  },
  moduleDescription: {
    padding: 20,
    fontSize: 18,
    color: '#93c5fd',
    fontWeight: '600',
    lineHeight: 24,
  },
});

export default FloripaSat1Screen; 
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <Image 
                source={require('../assets/images/logo.png')}
                style={styles.logo}
              />
            </View>
          </View>

          {/* Title Section */}
          <View style={styles.titleContainer}>
            <View style={styles.titleUnderline} />
            <Text style={styles.subtitle}>
              Making Satellite Data Accessible
            </Text>
          </View>

          {/* Description Section */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Where Satellites and Data Converge: Understand space data like never before with NanoSatTracker.
            </Text>
          </View>

          {/* Features Section */}
          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Text style={styles.featureIconText}>🛰️</Text>
              </View>
              <Text style={styles.featureText}>Real-time Tracking</Text>
            </View>
            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Text style={styles.featureIconText}>📊</Text>
              </View>
              <Text style={styles.featureText}>Data Analytics</Text>
            </View>
            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Text style={styles.featureIconText}>🌍</Text>
              </View>
              <Text style={styles.featureText}>Global Coverage</Text>
            </View>
          </View>

          {/* Button Section */}
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Get Started"
              handlePress={() => router.push("/(auth)/sign-in")}
              containerStyles={styles.continueButton}
            />
            <Text style={styles.buttonSubtext}>
              Join thousands of users tracking satellites
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 40,
    minHeight: height,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logo: {
    width: 300,
    height: 300,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  titleUnderline: {
    width: 80,
    height: 4,
    backgroundColor: '#007AFF',
    borderRadius: 2,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#007AFF',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  descriptionContainer: {
    alignItems: 'center',
    marginBottom: 48,
    paddingHorizontal: 24,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: '#E0E0E0',
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 0.3,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 48,
    paddingHorizontal: 20,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  featureIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 122, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIconText: {
    fontSize: 24,
  },
  featureText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E0E0E0',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  continueButton: {
    width: '100%',
    marginBottom: 16,
  },
  buttonSubtext: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    fontStyle: 'italic',
  },
}); 
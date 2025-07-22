import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const AnimatedBox = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const collaborators = [
    'PY2ABC - São Paulo, Brazil',
    'VK3XYZ - Melbourne, Australia', 
    'JA1DEF - Tokyo, Japan',
    'G0GHI - London, UK',
    'W1JKL - New York, USA',
    'VE7MNO - Vancouver, Canada',
  ];

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View className="bg-secondary-700 rounded-xl p-4 m-4">
        <Text className="text-blue-300 font-semibold text-center mb-4">
          Ham Radio Collaborators
        </Text>
        {collaborators.map((collaborator, index) => (
          <Text 
            key={index} 
            className="text-blue-100 text-center py-1"
          >
            {collaborator}
          </Text>
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AnimatedBox; 
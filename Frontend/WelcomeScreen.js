import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const [typedText, setTypedText] = useState('');
  const targetText = 'Kuzolunga!'; // Text to be auto-typed
  const typingDelay = 100; // Delay between each character typing (in milliseconds)
  const loadingDuration = 2000; // Duration of the loading screen (in milliseconds)

  useEffect(() => {
    // Auto-typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedText(targetText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === targetText.length) {
        clearInterval(typingInterval);
      }
    }, typingDelay);

    // Navigate to the login screen after the loading duration
    const navigationTimeout = setTimeout(() => {
      navigation.navigate('Login');
    }, loadingDuration);

    // Clean up intervals and timeouts
    return () => {
      clearInterval(typingInterval);
      clearTimeout(navigationTimeout);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{typedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013220',
  },
  text: {
    fontSize: 36,
    fontFamily: 'Brush Script MT',
    color: 'white',
    transform: [{ rotate: '340deg' }], // Apply a 20-degree angle
  },
});

export default WelcomeScreen;
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // Check if the user is an admin (example logic)
    if (email === 'admin@example.com' && password === 'admin123') {
      navigation.navigate('AdminPage');
    } else {
      // Handle non-admin user login logic here
      // For now, just log a message
      console.log('Non-admin user login');
    }
  };

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>Login</Card.Title>
        <Card.Divider />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account?
          <TouchableOpacity style={styles.signupButton} onPress={goToSignup}>
            <Text style={styles.signupButtonText}>Sign up here</Text>
          </TouchableOpacity>
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#013220',
  },
  cardContainer: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
  },
  cardTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  loginButton: {
    backgroundColor: '#013220',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
  signupButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  signupButtonText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
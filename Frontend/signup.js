import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
    };

    fetch('http://127.0.0.1:8000/api/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Signup request failed.'); // Throw an error for non-2xx response status
        }
        return response.json();
      })
      .then(data => {
        // Handle success response
        console.log('Signup successful:', data);
        // You can perform additional actions here, such as navigating to a success screen
        setError(''); // Clear any previous error message
        // Optional success actions
        console.log('Signup successful');
        // You can perform additional actions here, such as navigating to a success screen
      })
      .catch(error => {
        // Handle error
        console.error('Signup error:', error);
        setError('An error occurred during signup.'); // Set the error message
        // You can display an error message to the user or perform other error handling actions
      });
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.cardTitle}>Create an Account</Card.Title>
        <Card.Divider style={styles.divider} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
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
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{error}</Text> {/* Display the error message */}
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <TouchableOpacity style={styles.loginLink} onPress={goToLogin}>
            <Text style={styles.loginLinkText}>Login here</Text>
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
    borderRadius: 0,
  },
  card: {
    marginBottom: 10,
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    marginBottom: 15,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  signupButton: {
    backgroundColor: '#013220',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  signupButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 10,
  },
  loginLinkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Signup;
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from './signup.js';
import Login from './login';
import AddLaptops from './addlaptops';
import AdminPage from './adminpage';
import AddUserPage from './adduser';
import ViewLaptopsPage from './viewlaptops';
import ViewUsersPage from './viewusers';
import WelcomeScreen from './WelcomeScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AddLaptops" component={AddLaptops} />
          <Stack.Screen name="AdminPage" component={AdminPage} />
          <Stack.Screen name="AddUser" component={AddUserPage} />
          <Stack.Screen name="ViewUsers" component={ViewUsersPage} />
          <Stack.Screen name="ViewLaptops" component={ViewLaptopsPage} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#013220',
  },
});
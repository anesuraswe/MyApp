import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AdminPage = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleAddUser = () => {
    navigation.navigate('AddUser');
  };

  const handleAddLaptops = () => {
    navigation.navigate('AddLaptops');
  };

  const handleViewUsers = () => {
    navigation.navigate('ViewUsers');
  };

  const handleViewLaptops = () => {
    navigation.navigate('ViewLaptops');
  };

  const handleViewProfile = () => {
    // Handle the navigation to the admin's profile screen
  };

  const handleViewNotifications = () => {
    // Handle the navigation to the notifications screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.dashboard}>
        <TouchableOpacity style={styles.toggleButton} onPress={handleToggleSidebar}>
          <Icon name={sidebarVisible ? 'chevron-forward' : 'chevron-back'} size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Admin Page</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddUser}>
          <Text style={styles.buttonText}>Add User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddLaptops}>
          <Text style={styles.buttonText}>Add Laptops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleViewUsers}>
          <Text style={styles.buttonText}>View Users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleViewLaptops}>
          <Text style={styles.buttonText}>View Laptops</Text>
        </TouchableOpacity>
      </View>
      {sidebarVisible && (
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.sidebarButton} onPress={handleViewProfile}>
            <Icon name="person" size={24} color="#fff" />
            <Text style={styles.sidebarButtonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarButton} onPress={handleViewNotifications}>
            <Icon name="notifications" size={24} color="#fff" />
            <Text style={styles.sidebarButtonText}>Notifications</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  dashboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  toggleButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '60%',
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  sidebarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sidebarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default AdminPage;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ViewUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Fetch users error:', error);
      Alert.alert('Error', 'Failed to fetch users');
    }
  };

  const handleRoleLongPress = (role) => {
    setSelectedRole(role);
  };

  const handleEdit = () => {
    if (selectedUserId) {
      // Navigate to the edit user screen or perform edit functionality
      console.log(`Edit user with ID: ${selectedUserId}`);
      setMenuVisible(false); // Close the menu
    }
  };

  const handleDelete = async () => {
    if (selectedUserId) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${selectedUserId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
        // Update the users state by filtering out the deleted user
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUserId));
        setSelectedUserId(null);
        setMenuVisible(false); // Close the menu
      } catch (error) {
        console.error('Delete user error:', error);
        Alert.alert('Error', 'Failed to delete user');
      }
    }
  };

  const renderUserItem = ({ item }) => {
    const isSelected = item.role === selectedRole;
    return (
      <TouchableOpacity
        style={[styles.itemContainer, isSelected && styles.selectedItem]}
        onPress={() => setSelectedUserId(item.id)}
        onLongPress={() => handleRoleLongPress(item.role)}
      >
        <View style={styles.userContainer}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userEmail}>{item.email}</Text>
          <Text style={styles.userRole}>{item.role}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const showMenu = (userId) => {
    setSelectedUserId(userId);
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setSelectedUserId(null);
    setMenuVisible(false);
  };

  const handleMenuSelect = (action) => {
    switch (action) {
      case 'edit':
        handleEdit();
        break;
      case 'delete':
        handleDelete();
        break;
      default:
        break;
    }
  };

  const keyExtractor = (item) => {
    if (typeof item === 'undefined' || item === null) {
      // Handle the case where the item is undefined or null
      return '';
    }
    return item.toString();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Users</Text>
      <View style={styles.menuContainer}>
        {selectedUserId && (
          <TouchableOpacity onPress={showMenu}>
            <Text style={styles.menuText}>☰</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Email</Text>
        <Text style={styles.headerText}>Role</Text>
      </View>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContainer}
      />
      {menuVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.menuButton} onPress={() => handleMenuSelect('edit')}>
            <Text style={styles.menuButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => handleMenuSelect('delete')}>
            <Text style={styles.menuButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  menuText: {
    fontSize: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: '#D3D3D3',
  },
  userContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#888888',
  },
  userRole: {
    fontSize: 14,
    color: '#888888',
    fontStyle: 'italic',
  },
  listContainer: {
    flexGrow: 1,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  menuButton: {
    paddingVertical: 5,
  },
  menuButtonText: {
    fontSize: 16,
  },
});

export default ViewUsersPage;
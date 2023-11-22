import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ViewLaptopsPage = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    // Fetch laptops from an API or perform any necessary data retrieval logic
    // Update the 'laptops' state with the fetched data
    // For demonstration purposes, let's assume the data is already available
    const fetchedLaptops = [
      { id: 1, serialNumber: 'ABC123', make: 'HP', model: 'Envy X360', color: 'Silver', status: 'Active' },
      { id: 2, serialNumber: 'DEF456', make: 'Dell', model: 'XPS 13', color: 'Black', status: 'Inactive' },
      { id: 3, serialNumber: 'GHI789', make: 'Lenovo', model: 'ThinkPad X1 Carbon', color: 'Gray', status: 'Active' },
    ];
    setLaptops(fetchedLaptops);
  }, []);

  const handleEdit = (id) => {
    // Handle edit functionality for the selected laptop
    console.log(`Edit laptop with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete functionality for the selected laptop
    console.log(`Delete laptop with ID: ${id}`);
  };

  const renderLaptopItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.serialNumber}</Text>
        <Text style={styles.itemText}>{item.make}</Text>
        <Text style={styles.itemText}>{item.model}</Text>
        <Text style={styles.itemText}>{item.color}</Text>
        <Text style={styles.itemText}>{item.status}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item.id)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Laptops</Text>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Serial Number</Text>
        <Text style={styles.headerText}>Make</Text>
        <Text style={styles.headerText}>Model</Text>
        <Text style={styles.headerText}>Color</Text>
        <Text style={styles.headerText}>Status</Text>
        <Text style={styles.headerText}>Actions</Text>
      </View>
      <FlatList
        data={laptops}
        renderItem={renderLaptopItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: windowWidth - 40, // Adjusted to fit the screen with padding
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
    width: windowWidth - 40, // Adjusted to fit the screen with padding
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
   shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    flex: 1,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  editButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ViewLaptopsPage;
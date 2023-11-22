import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddLaptops = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');
  const [color, setColor] = useState('');
  const [status, setStatus] = useState('');

  const handleAddLaptop = () => {
    const laptopData = {
      serialNumber: serialNumber,
      model: model,
      make: make,
      color: color,
      status: status,
    };

    fetch('http://127.0.0.1:8000/api/addlaptop/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(laptopData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Adding laptop request failed.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Laptop addition successful:', data);
        // Perform additional actions here, such as displaying a success message or navigating to another page
      })
      .catch(error => {
        console.error('Laptop addition error:', error);
        // Perform error handling here, such as displaying an error message
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Serial Number"
        value={serialNumber}
        onChangeText={setSerialNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Model"
        value={model}
        onChangeText={setModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Make"
        value={make}
        onChangeText={setMake}
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        value={color}
        onChangeText={setColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <Button title="Add Laptop" onPress={handleAddLaptop} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default AddLaptops;
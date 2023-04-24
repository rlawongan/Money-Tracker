import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const usersWithId1 = response.data.filter(user => user.id === 1);
        setUsers(usersWithId1);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (users.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const user = users[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>
      <View style={styles.usersContainer}>
        <Text style={styles.label}>
          <Text style={styles.text}>Name:</Text> {user.name}
        </Text>
        <Text style={styles.label}>
          <Text style={styles.text}>Username:</Text> {user.username}
        </Text>
        <Text style={styles.label}>
          <Text style={styles.text}>Email:</Text> {user.email}
        </Text>
        <Text style={styles.label}>
          <Text style={styles.text}>Address:</Text> {user.address.street},
          {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </Text>
        <Text style={styles.label}>
          <Text style={styles.text}>Phone:</Text> {user.phone}
        </Text>
      </View>
    </View>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  usersContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  label: {
    fontSize: 14,
    marginLeft: 15,
    color: 'black',
    fontWeight: '400',
  },
});

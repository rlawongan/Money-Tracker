import {ScrollView, Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const Main = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Hello World!!!</Text>
      </View>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 8,
    flexDirection: 'column-reverse',
    flexWrap: 'wrap',
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
  },

  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },

  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});

export default Main;

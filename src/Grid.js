import React from 'react';
import {StatusBar} from 'react-native';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Grid = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.first}>
        <Text style={styles.title}>Learn Grid in React Native</Text>
      </View>
      <View style={styles.second}></View>
      <View style={styles.third}></View>
      <View style={styles.fourth}></View>
      <View style={styles.wrapper}>
        <View style={styles.sixth}></View>
        <View style={styles.seventh}></View>
        <View style={styles.fifth}></View>
        <View style={styles.eighth}></View>
        <View style={styles.ninth}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignContent: 'space-around',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
  },

  first: {
    height: '18%',
    width: '95%',
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    color: '#fff',
  },

  second: {
    height: '18%',
    width: '56%',
    backgroundColor: 'green',
    borderRadius: 10,
  },

  third: {
    height: '18%',
    width: '36%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },

  fourth: {
    height: '60%',
    width: '56%',
    backgroundColor: 'orange',
    borderRadius: 10,
  },

  wrapper: {
    height: '60%',
    width: '36%',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 10,
  },

  sixth: {
    width: '100%',
    height: '32%',
    backgroundColor: 'yellow',
    borderRadius: 10,
  },

  seventh: {
    width: '47%',
    height: '32%',
    backgroundColor: 'purple',
    borderRadius: 10,
  },

  fifth: {
    width: '47%',
    height: '32%',
    backgroundColor: 'grey',
    borderRadius: 10,
  },

  eighth: {
    width: '47%',
    height: '32%',
    backgroundColor: 'brown',
    borderRadius: 10,
  },

  ninth: {
    width: '47%',
    height: '32%',
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
});

export default Grid;

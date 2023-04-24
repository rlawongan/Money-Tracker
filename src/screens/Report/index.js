import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Made with{' '}
        <Image source={require('../../assets/icons/icon-love-32.png')} /> by
        Renaldy
      </Text>
      <Image
        style={styles.iconMoney}
        source={require('../../assets/gifs/icons8-cash.gif')}
      />
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFC',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#020202',
  },
  iconMoney: {
    marginTop: 20,
  },
});

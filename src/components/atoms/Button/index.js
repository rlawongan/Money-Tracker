import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, onPress, color = '#02CF8E', textColor = '#020202'}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.buttonText(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  }),
  buttonText: textColor => ({
    color: textColor,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
  }),
});

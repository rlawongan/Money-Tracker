import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets/icons';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.subText}>{subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    fontWeight: '500',
    marginLeft: 32,
    marginTop: 2.5,
  },
  subText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '300',
    color: '#8D92A3',
    marginHorizontal: -90,
    marginTop: 60,
  },
  back: {
    padding: 10,
  },
});

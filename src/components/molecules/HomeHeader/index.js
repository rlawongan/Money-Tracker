import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HomeHeader = ({title, subTitle, logo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.right}>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 108,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  left: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '300',
    color: '#8D92A3',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

export default HomeHeader;

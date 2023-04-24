import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = ({date, description, amount}) => {
  const isNegative = amount[0] === '-';
  const textColor = isNegative ? '#D9435E' : '#1ABC9C';
  const sign = isNegative ? '-Rp' : '+Rp';

  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={[styles.amount, {color: textColor}]}>
          {sign} {amount.slice(1)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 69,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5, // untuk menambahkan shadow
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    color: '#8D92A3',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    color: '#020202',
  },
  amount: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    fontWeight: '700',
    color: '#020202',
  },
});

export default Card;

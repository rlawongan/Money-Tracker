import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, HomeHeader} from '../../components';
import Gap from '../../components/atoms/Gap';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HomeHeader
        title="Money Tracker"
        subTitle="Track your money"
        logo={require('../../assets/images/imagePlaceholder.png')}
      />
      <Gap height={20} />
      <View style={styles.container}>
        <Text style={styles.title}>Your Balance</Text>
        <View>
          <Text style={styles.balance}>Rp. 10.000.000</Text>
          <View style={styles.line} />
          {/* Content of your component */}
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              Cash on Hand{'            Rp. 4.000.000'}
            </Text>
            <Text style={styles.text}>
              Cash on Bank{'            Rp. 6.000.000'}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.page}>
        <View style={styles.transactionWrapper}>
          <Text style={styles.transactionTitle}>Add Transaction</Text>
          <Gap height={8} />
          <Button
            label="Cash on Hand"
            onPress={() => navigation.navigate('CashOnHand')}
          />
          <Gap height={18} />
          <Button
            label="Cash on Bank"
            onPress={() => navigation.navigate('CashOnBank')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 2,
    backgroundColor: '#FAFAFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  transactionWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  transactionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: '#000000',
    paddingTop: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    color: '#000000',
  },
  balance: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    paddingTop: 4,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingTop: 18,
  },
  textWrapper: {
    paddingTop: 20,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    color: '#000000',
    paddingTop: 11,
  },
});

export default Home;

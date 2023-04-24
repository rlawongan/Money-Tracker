import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Button, Header, TextInput, Card} from '../../components';
import Gap from '../../components/atoms/Gap';
import React, {useState, useEffect} from 'react';

const CashOnHand = ({navigation}) => {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleTransaction = () => {
    const data = {
      description: description,
      type: type,
    };

    console.log(data);
  };
  return (
    <View style={styles.page}>
      <Header title="Cash On Hand" onBack={() => navigation.goBack()} />
      <Gap height={24} />

      <View style={styles.container}>
        <TextInput
          label="Description"
          placeHolder="Add the description"
          value={description}
          onChangeText={e => setDescription(e)}
        />
        <Gap height={17} />

        <TextInput
          label="Type"
          placeHolder="Debit / Credit"
          value={type}
          onChangeText={e => setType(e)}
        />
        <Gap height={22} />

        <Button label="Save" onPress={handleTransaction} />
      </View>
      <View style={styles.page}>
        <View style={styles.historyWrapper}>
          <Text style={styles.transactionTitle}>Last 3 Transactions</Text>
          <Card
            date="17 April 2023"
            description="Water, Food"
            amount="-300.000"
          />

          <Card
            date="18 April 2023"
            description="Office supplies"
            amount="-300.000"
          />

          <Card date="19 April 2023" description="Top Up" amount="+300.000" />
        </View>
      </View>
    </View>
  );
};

export default CashOnHand;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  historyWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  transactionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: '#020202',
    paddingTop: 16,
    paddingBottom: 10,
  },
});

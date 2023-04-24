import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const Register = () => {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    const data = {
      name: name,
      userName: userName,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    };

    console.log(data);

    // setelah registrasi berhasil, kosongkan text input
    setName('');
    setUsername('');
    setEmail('');
    setAddress('');
    setPhoneNumber('');

    // tampilkan pop-up notifikasi
    Alert.alert('Registrasi berhasil!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.registration}>Registration</Text>
      <Gap height={40} />
      <TextInput
        label="Name"
        placeHolder="Masukan nama lengkap anda"
        value={name}
        onChangeText={e => setName(e)}
      />
      <Gap height={25} />
      <TextInput
        label="Username"
        placeHolder="Masukan username anda"
        value={userName}
        onChangeText={e => setUsername(e)}
      />
      <Gap height={25} />
      <TextInput
        label="Email"
        placeHolder="Masukan email anda"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <Gap height={25} />
      <TextInput
        label="Address"
        value={address}
        onChangeText={e => setAddress(e)}
        placeholder="Masukan alamat anda"
        multiline={true}
      />
      <Gap height={25} />
      <TextInput
        label="Phone Number"
        keyboardType="phone-pad"
        placeholder="Masukan nomor telepon anda"
        value={phoneNumber}
        onChangeText={e => setPhoneNumber(e)}
      />
      <Gap height={35} />
      <Button label="Register" onPress={handleRegister} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  registration: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

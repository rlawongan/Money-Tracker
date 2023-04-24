import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Gap from '../../components/atoms/Gap';
import {Header, TextInput, Button} from '../../components';

const SignIn = ({navigation}) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Received Data SignIn
  const handleSignIn = () => {
    const data = {
      userName: userName,
      password: password,
    };

    console.log(data);
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" />
      <Gap height={24} />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeHolder="Type your email address"
          value={userName}
          onChangeText={e => setUsername(e)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeHolder="Type your password"
          value={password}
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />
        <Gap height={24} />
        <Button label="Sign In" onPress={() => navigation.navigate('Home')} />
        <Gap height={12} />
        <Button
          color="#8D92A3"
          textColor="#FFFFFF"
          label="Create New Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 26,
  },
});

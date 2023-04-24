import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

const SignInScreen = () => {
  const [username, setUsername] = useState('Renaldy');
  const [password, setPassword] = useState('12345');

  const handleSignIn = () => {
    // Implement sign in functionality here
    console.log(`Signing in with email: ${username}, password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan username anda"
        keyboardType="email-address"
        autoCapitalize="none"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan password anda"
        secureTextEntry={true}
        autoCapitalize="none"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
    marginTop: 25,
    marginRight: 220,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    marginVertical: 8,
    minWidth: 365,
    height: 50,
  },
  button: {
    backgroundColor: '#Ff7300',
    padding: 8,
    borderRadius: 10,
    minWidth: 365,
    height: 48,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },

  label: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginRight: 280,
    marginTop: 10,
  },
});

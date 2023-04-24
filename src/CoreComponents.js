import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

// destruct
const CoreComponents = ({title, subtitle}) => {
  const hello = 'Hello World!';
  return (
    <ScrollView>
      {/* Fragment */}
      <>
        {/* Menampilkan variabel javascript */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View>
          <Text>Some more text</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={styles.image}
          />

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1676714811276-cb76e4c16af8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }}
            style={styles.image}
          />

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1676714811276-cb76e4c16af8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }}
            style={styles.image}
          />

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1676714811276-cb76e4c16af8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }}
            style={styles.image}
          />
        </View>
        <TextInput style={styles.textInput} defaultValue="You can type in me" />
      </>
    </ScrollView>
  );
};

//StyleSheet vs Inline Style
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'red',
    color: 'white',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default CoreComponents;

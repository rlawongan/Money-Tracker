import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Button, Header, TextInput} from '../../components';
import Gap from '../../components/atoms/Gap';
import React, {useState, useEffect} from 'react';
import imgPlaceHolder from '../../assets/images/imagePlaceholder.png';

const ImagePicker = require('react-native-image-crop-picker');

const SignUp = ({navigation}) => {
  const [profile, setProfile] = useState(null);

  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false); // tambahkan state isEmailError
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);

  const handleNameFocus = () => {
    setIsFocusedName(true);
    setIsFocusedEmail(false);
    setIsFocusedPassword(false);
  };
  const handleEmailFocus = () => {
    setIsFocusedName(false);
    setIsFocusedEmail(true);
    setIsFocusedPassword(false);
    setIsEmailInputFocused(true); // set isEmailInputFocused state to true
  };
  const handlePasswordFocus = () => {
    setIsFocusedName(false);
    setIsFocusedEmail(false);
    setIsFocusedPassword(true);
  };
  const handleBlur = () => {
    setIsFocusedName(false);
    setIsFocusedEmail(false);
    setIsFocusedPassword(false);
    setIsEmailInputFocused(false); // set isEmailInputFocused state to false
  };

  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfile(image.path);
    });
  };

  const handleEmailChange = text => {
    setEmail(text);
    setIsEmailRegistered(false); // reset isEmailRegistered state
    setIsEmailError(false); // reset isEmailError state
  };
  const handleSignUp = () => {
    // check if email is already registered
    if (email === 'renaldy691@gmail.com') {
      setIsEmailRegistered(true);
      setIsEmailError(true); // set isEmailError state to true
      setIsEmailInputFocused(false); // set isEmailInputFocused state to false
    } else {
      // do sign up process
      console.log('Sign up successful');
    }
  };

  const onCancel = () => {
    setIsEmailRegistered(false); // reset isEmailRegistered state
    setIsEmailError(false); // reset isEmailError state
    setEmail('');
  };

  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        {isEmailRegistered && (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>
              Email sudah terdaftar pada aplikasi
            </Text>
            <TouchableOpacity style={styles.iconCancel} onPress={onCancel}>
              <Image
                source={require('../../assets/icons/icons8-cancel-24.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Header
        title="Sign Up"
        subTitle="Register and eat"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <Image
              style={styles.addPhoto}
              source={profile ? {uri: profile} : imgPlaceHolder}
            />
          </View>
          <TouchableOpacity onPress={imagePick} style={styles.iconsWrapper}>
            <Image
              style={styles.gifPencil}
              source={require('../../assets/icons/icons8-pencil-24.png')}
            />
          </TouchableOpacity>
        </View>

        <TextInput
          style={[
            styles.input,
            !isFocusedEmail &&
              !isFocusedPassword &&
              isFocusedName &&
              styles.inputFocused,
          ]}
          onFocus={handleNameFocus}
          onBlur={handleBlur}
          label="Full Name"
          placeHolder="Type your full name"
        />
        <Gap height={16} />
        <TextInput
          style={[
            styles.input,
            !isFocusedName &&
              !isFocusedPassword &&
              isFocusedEmail &&
              styles.inputFocused,
            isEmailError && styles.errorInput,
          ]}
          onFocus={handleEmailFocus}
          onBlur={handleBlur}
          onChangeText={handleEmailChange}
          label="Email Address"
          value={email}
          placeHolder="Type your email address"
        />
        <Gap height={16} />
        <TextInput
          style={[
            styles.input,
            !isFocusedName &&
              !isFocusedEmail &&
              isFocusedPassword &&
              styles.inputFocused,
          ]}
          onFocus={handlePasswordFocus}
          onBlur={handleBlur}
          secureTextEntry={true}
          label="Password"
          placeHolder="Type your password"
        />
        <Gap height={24} />
        <Button label="Continue" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  headerContainer: {
    position: 'relative',
    zIndex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  addPhotoText: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    maxWidth: 40,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  iconsWrapper: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    top: -15,
  },
  gifPencil: {
    marginLeft: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: '#1ABC9C',
  },
  errorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#D9435E',
    padding: 15,
    flexDirection: 'row',
  },
  error: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
  },
  iconCancel: {
    marginLeft: 110,
  },
  errorInput: {
    borderColor: '#D9435E',
    color: '#D9435E',
  },
});

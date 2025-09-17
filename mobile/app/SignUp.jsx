import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SignUp = () => {
  const [activeButton, setActiveButton] = useState('signup');
  const router = useRouter();

  const handleLogin = () => {
    setActiveButton('login');
    router.push('./'); // Navigates back to the index.jsx (login screen)
  };

  const handleSignUp = () => {
    setActiveButton('signup');
  };

  const handleFinalSignUp = () => {
    router.replace('/(tabs)/home'); // Navigate to the home screen after signup
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>

          <View style={styles.topImageContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.topText}>Sign up to explore about our app</Text>
          </View>

          <View style={styles.container2}>
            <View style={styles.pinkRectangle} />
            <View style={styles.roundedRectangle} />
          </View>

          <View style={styles.container3}>
            <View style={styles.buttonWrapper}>
              <View
                style={[
                  styles.loginRectangle,
                  activeButton === 'login' && styles.slideLeft,
                ]}
              />

              <TouchableOpacity
                style={styles.touchable}
                onPress={handleLogin}
              >
                <Text
                  style={[
                    styles.buttonText,
                    activeButton === 'login' ? styles.activeText : styles.inactiveText,
                  ]}
                >
                  Log in
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.touchable}
                onPress={handleSignUp}
              >
                <Text
                  style={[
                    styles.buttonText,
                    activeButton === 'signup' ? styles.activeText : styles.inactiveText,
                  ]}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.inputContainer, { marginTop: 30}]}>
            <TextInput
              placeholder="Full Name"
              keyboardType="default"
              style={styles.textInput}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username or Email"
              keyboardType="email-address"
              style={styles.textInput}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={true}
              style={styles.textInput}
            />
          </View>

          <TouchableOpacity onPress={handleFinalSignUp} style={styles.button}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topImageContainer: {
    backgroundColor: '#FCC8D1',
    width: '100%',
    height: 350,
    borderBottomLeftRadius: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  logo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 60,
  },

  topText: {
    position: 'absolute',
    top: 300,
    fontSize: 18,
    color: '#D14D72',
    zIndex: 1,
  },

  container2: {},

  pinkRectangle: {
    position: 'absolute',
    right: 0,
    width: 117,
    height: 75,
    backgroundColor: '#D14D72',
  },

  roundedRectangle: {
    position: 'absolute',
    right: 0,
    width: 117,
    height: 75,
    backgroundColor: '#fff',
    borderTopRightRadius: 60,
  },

  container3: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },

  buttonWrapper: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FEF2F4',
    overflow: 'hidden',
    marginTop: 20,
  },

  loginRectangle: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: '#FCC8D1',
    left: '50%', 
  },

  slideLeft: {
    transform: [{ translateX: '-100%' }], 
  },

  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  activeText: {
    color: 'black',
  },

  inactiveText: {
    color: '#fcc8d1',
  },

  inputContainer: {
    alignSelf: 'center',
    width: '90%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 40,
    shadowColor: '#000',
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 10, 
  },

  textInput: {
    fontSize: 16,
  },

  button: {
    marginTop: 20,
    backgroundColor: '#FCC8D1',
    borderRadius: 40,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 15,
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
  },

  orText: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
    color: '#000',
    fontSize: 16,
  },

  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  iconContainer: {
    marginHorizontal: 10,
  }
});

export default SignUp;
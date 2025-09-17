import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const index = () => {
  const [activeButton, setActiveButton] = useState('login');
  const router = useRouter();

  const handleLogin = () => {
    setActiveButton('login');
  };

  const handleSignUp = () => {
    setActiveButton('signup');
    router.push('./SignUp');
  };

  const handleFinalLogin = () => {
    router.replace('/(tabs)/home');
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
            <Text style={styles.topText}>Log in to explore about our app</Text>
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
                  activeButton === 'signup' && styles.slideRight,
                ]}
              />

              <TouchableOpacity
                style={styles.touchable}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Log in</Text>
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
          <TouchableOpacity onPress={() => {}} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleFinalLogin} style={styles.button}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Log in</Text>
          </TouchableOpacity>
          
          <Text style={styles.orText}>or login with</Text>

          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
              <Ionicons name="logo-google" size={30} color />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
              <Ionicons name="logo-facebook" size={30} color="#1877F2" />
            </TouchableOpacity>
          </View>

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

  container2: {
    //blank
  },

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
    left: 0,
  },

  slideRight: {
    transform: [{ translateX: '100%' }],
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
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginBottom: 10,
  },

  forgotPasswordText: {
    color: '#D14D72',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default index;
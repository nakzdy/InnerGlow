import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router' 
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.topText}>Your glow starts here!</Text>
      </View>
    
      <View style={styles.container2}>
      <View style={styles.pinkRectangle} />
      <View style={styles.roundedRectangle} />
    </View>

      <View style={styles.email}>
        <TextInput
          placeholder="Username or Email"
          keyboardType='email-address'
        />
      </View> 

      <View style={styles.pass}>
        <TextInput
          placeholder="Password"
          keyboardType='password'
        />
      </View> 

      <View style={styles.pass}>
        <TextInput
          placeholder="Confirm Password"
          keyboardType='password'
        />
      </View> 

      <TouchableOpacity style={styles.button}>
        <Text>Sign Up</Text>
      </TouchableOpacity>

      <Text style= {styles.footer}>
        Already have an account?{" "}
        <Link href="/" style={styles.link}>
          Log In
        </Link>
      </Text>

    </View>
  )
}

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
  },

  logo: {
    width: "85%",
    height: 275,
    alignSelf: 'center',
    marginTop: 60,
  },

  topText: {
    position: 'absolute',
    top: 300,
    fontSize: 18,
    alignSelf: 'center',
    color: '#D14D72',
    zIndex: 1,
  },

  container2: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#ffff',
    borderTopRightRadius: 60,
  },

  email: {
    marginTop: 100,
    backgroundColor: '#ffff',
    borderRadius: 40,
    shadowColor: "#000",
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '90%',
    bottom: 50,
    alignSelf: 'center',
    position: 'relative',
  },

  pass: {
    marginTop: 20,
    backgroundColor: '#ffff',
    borderRadius: 40,
    shadowColor: "#000",
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '90%',
    bottom: 50,
    alignSelf: 'center',
  },

  button: {
    marginTop: 40,
    backgroundColor: '#FCC8D1',
    borderRadius: 40,
    shadowColor: "#000",
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '40%',
    bottom: 50,
    alignSelf: 'center',
    alignItems: 'center',
  },

  footer: {
    bottom: 50,
    footSize: 14,
    alignSelf: 'center',
    marginTop: 20,
  },

  link: {
    color: '#FCC8D1',
    fontWeight: 'bold',
  }
})

export default index;
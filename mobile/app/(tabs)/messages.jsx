import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'


const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inboxbar}>
        <Text style={styles.inbox}>Inbox</Text>
        <TouchableOpacity style={styles.button }>
          <Entypo name="notification" size={27} color="black" style={{ position: "absolute", right: 80, top: -40}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
          <Entypo name="new-message" size={27} color="black" style={{ position: "absolute", right: 25, top: -40}} />
        </TouchableOpacity>
      </View> 
      <View>
        <View style={styles.box}>
          <Image source={require("../(tabs)/assets/images/message.png")}/>
        </View>
        <Text style={styles.find}>Find people to message</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },

  inboxbar: {
    height: 90,
    width: "100%",
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },

  inbox: {
    fontSize: 40,
    fontWeight: "700",
    paddingLeft: 10,
    paddingTop: 15,
  },
  
  box: {
    position: "relative",
    alignItems: "center", 
    left: -15,
    width: 400,
    height: 400,
  },

  find: {
    textAlign: "center",
    fontSize: 19,
    color: "#666",
    marginTop: -60,
  },

})

export default Messages
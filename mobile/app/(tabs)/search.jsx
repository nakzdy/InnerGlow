import { View, Text, Image, } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const search = () => {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        {/*Image*/}
        <View style={styles.searchBar}>
         <Text style={{ fontStyle: 'italic', position: "absolute", left: 35, fontSize: 16, top: 10 }}>Search for ideas</Text>
            <Ionicons name="search" size={21} color="black"  style={{ position: "absolute", left: 10, top: 10 }} />
            <Ionicons name="camera-outline" size={22} color="black" style={{ position: "absolute", right: 12 , top: 10}} />
        </View>
      </View>
    </View>
  )
}

const styles = {
  container1: {
    flex: 1, 
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  container2: {
    height: 300,
    backgroundColor: '#d9d9d9',
  },
  searchBar: {
    height: 45,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
}

export default search
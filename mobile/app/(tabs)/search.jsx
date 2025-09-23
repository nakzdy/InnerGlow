import { View, Text } from 'react-native'
import React from 'react'

const search = () => {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
      </View>
    </View>
  )
}

const styles = {
  container1: {
    flex: 1, 
    paddingTop: 40,
    backgroundColor: '#ad3535ff',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default search
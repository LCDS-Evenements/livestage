import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
      <Button title='Go to Test' onPress={() => navigation.navigate('Test')} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
})

export default Home

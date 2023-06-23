//Librairies
import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({ placeholder, value, onChange, color }) => {
  const styles = StyleSheet.create({
    input: {
      borderRadius: 20,
      backgroundColor: color,
      width: 300,
      padding: 15,
    },
  })

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  )
}

export default Input

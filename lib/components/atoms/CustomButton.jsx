import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ value, color, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      borderRadius: 15,
      padding: 15,
    },
  })

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ fontSize: 16 }}>{value}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

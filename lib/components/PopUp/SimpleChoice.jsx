import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native'
import React, { useEffect, useRef } from 'react'

const SimpleChoice = ({ text, button, active, toggleActive }) => {
  const opacity = useRef(new Animated.Value(active ? 1 : 0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: active ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start()
  }, [active])

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      backgroundColor: '#252525',
      width: '90%',
      height: 150,
      alignSelf: 'center',
      bottom: 30,
      borderRadius: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      gap: 20,
      opacity: opacity,
    },
    text: {
      textAlign: 'center',
      fontSize: 16,
      color: '#EAEAEA',
      fontWeight: 'bold',
    },
    buttonContainer: {
      backgroundColor: '#151515',
      borderRadius: 15,
      padding: 15,
      width: 340,
    },
    buttonText: {
      fontSize: 16,
      color: '#EAEAEA',
      textAlign: 'center',
    },
  })

  return (
    <Animated.View style={styles.container}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={toggleActive}>
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default SimpleChoice

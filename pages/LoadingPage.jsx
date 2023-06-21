//Librairies
import { View, StyleSheet, Animated } from 'react-native'
import React, { useEffect } from 'react'

//Assets
import logo from '../assets/LOGO_blanc.png'

const LoadingPage = ({ navigation }) => {
  const rotation = new Animated.Value(0)

  const startRotationAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.delay(1500),
      ])
    ).start()
  }

  useEffect(() => {
    startRotationAnimation()
    setTimeout(() => {
      navigation.navigate('Connection')
    }, 4000)
  }, [])

  return (
    <View style={styles.mainContainer}>
      <Animated.Image
        style={[
          styles.logo,
          {
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
        source={logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#101010',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
})

export default LoadingPage

//Librairies
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

//Icons
import Home from '../../../assets/app/home.png'
import Plan from '../../../assets/app/plan.png'
import Tchat from '../../../assets/app/tchat.png'
import Story from '../../../assets/app/story.png'
import OnAir from '../../../assets/app/onair.png'

const FooterBar = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity>
        <Image style={styles.icon} source={Home} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icon} source={Plan} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icon} source={Tchat} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icon} source={Story} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.icon} source={OnAir} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#151515',
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    transform: [{ translateY: -5 }],
  },
})

export default FooterBar

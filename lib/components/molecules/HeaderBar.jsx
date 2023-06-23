//Librairies
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

//Icons
import Profil from '../../../assets/app/profil.png'
import NotifWhite from '../../../assets/app/notif-white.png'
import logo from '../../../assets/LOGO_blanc.png'

const HeaderBar = () => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity>
        <Image style={styles.profil} source={Profil} />
      </TouchableOpacity>
      <Image style={styles.logo} source={logo} />
      <TouchableOpacity>
        <Image style={styles.notif} source={NotifWhite} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    height: 110,
    position: 'absolute',
    top: 0,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  profil: {
    width: 25,
    height: 25,
  },
  logo: {
    width: 80,
    height: 80,
    transform: [{ translateY: 30 }],
  },
  notif: {
    width: 25,
    height: 25,
  },
})

export default HeaderBar

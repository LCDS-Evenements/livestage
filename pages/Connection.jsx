//Librairies
import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

//Assets
import logo from '../assets/LOGO_blanc.png'

//Utils
import { storeData } from '../lib/utils/storage'

//Components
import Input from '../lib/components/atoms/Input'
import CustomButton from '../lib/components/atoms/CustomButton'
import SimpleChoice from '../lib/components/atoms/popup/SimpleChoice'

const Connection = ({ navigation }) => {
  const [checked, setChecked] = useState(true)
  const [username, setUsername] = useState('')
  const [simpleChoice, setSimpleChoice] = useState(false)
  const [simpleChoiceText, setSimpleChoiceText] = useState('')

  const verifyBeforeNavigate = () => {
    if (username === '') {
      setSimpleChoice(true)
      setSimpleChoiceText(`Tu n'as pas choisis de nom d'utilisateur`)
    } else if (checked) {
      setSimpleChoice(true)
      setSimpleChoiceText(`Tu n'as pas accepté les conditions d'utilisation`)
    } else {
      navigation.navigate('Home')
      storeData('username', username)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Hello !</Text>
        <Text
          style={styles.text}
        >{`Bienvenu(e) sur LiveStage, pour commencer, choisis ton nom d'utilisateur afin d'intéragir avec les autres.`}</Text>
        <Input
          placeholder={`Nom d'utilisateur`}
          color='#EAEAEA'
          value={username}
          onChange={setUsername}
        />
        <BouncyCheckbox
          size={30}
          fillColor='#789ff9'
          unfillColor='#EAEAEA'
          text='J’accepte le règlement ainsi que les conditions d’utilisation et politiques de confidentialité.'
          textStyle={{
            color: '#EAEAEA',
            fontSize: 14,
            fontWeight: '200',
            textAlign: 'left',
            textDecorationLine: 'none',
          }}
          style={{ maxWidth: '80%' }}
          onPress={() => {
            setChecked(!checked)
          }}
        />
        <CustomButton
          value='Acceder à LiveStage'
          color='#EAEAEA'
          onPress={verifyBeforeNavigate}
        />
      </View>
      <SimpleChoice
        text={simpleChoiceText}
        button={`D'accord`}
        active={simpleChoice}
        toggleActive={() => {
          setSimpleChoice(false)
        }}
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
    width: 200,
    height: 200,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  title: {
    color: '#EAEAEA',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  text: {
    color: '#EAEAEA',
    fontSize: 14,
    fontWeight: '200',
    textAlign: 'center',
    maxWidth: '90%',
  },
  checkbox: {
    borderRadius: 20,
    backgroundColor: '#EAEAEA',
    width: 50,
    height: 50,
  },
})

export default Connection

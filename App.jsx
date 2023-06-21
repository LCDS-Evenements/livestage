//Librairies
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

//Pages
import Home from './pages/Home'
import Test from './pages/Test'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Test' component={Test} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}

export default App

//Librairies
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

//Pages
import LoadingPage from './pages/LoadingPage'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='LoadingPage' component={LoadingPage} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}

export default App

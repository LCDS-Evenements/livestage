//Librairies
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

//Pages
import LoadingPage from './pages/LoadingPage'
import Connection from './pages/Connection'

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
        <Stack.Screen name='Connection' component={Connection} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}

export default App

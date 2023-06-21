//Librairies
import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log('Erreur lors du stockage de la valeur:', error)
  }
}

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }
  } catch (error) {
    console.log('Erreur lors de la récupération de la valeur:', error)
  }
}

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
    console.log('Valeur supprimée avec succès')
  } catch (error) {
    console.log('Erreur lors de la suppression de la valeur:', error)
  }
}

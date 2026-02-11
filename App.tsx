/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import AddContact from './src/components/AddContact';
import Details from './src/components/Details';
import HomeComponent from './src/components/HomeComponent';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Button, FlatList, ScrollView, Text, TextInput } from 'react-native';

function App() {

  const Tab = createMaterialTopTabNavigator();
 
  return (
    <>
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Accueil} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Détails" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
     </>
  );
}

function Contact() {
  return (
    <>
      <AddContact nom='Natacha' telephone={459657855}>
      </AddContact>
      <AddContact nom='Natacha' telephone={459657855}>
      </AddContact>
      <AddContact nom='Natacha' telephone={459657855}>
      </AddContact>
    </>
  )
}

function Accueil() {
  return (
    <>
      <Button title="Contact" onPress={Add} />
      <Button title="Détails" onPress={Get} />
    </>
  )

}

 async function Add() {
  try {
    await AsyncStorage.setItem('mykey', 'myvalue');
  } catch (error) {
    console.error(error);
  }
}

async function Get() {
  try {
    const value = await AsyncStorage.getItem('mykey');
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}

export default App;

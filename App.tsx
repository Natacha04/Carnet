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
import { Button, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'; 
import { useState } from 'react';

type RootTabParamList = {
  Home: undefined;
  Contact: undefined;
  Details: undefined;
};

function App() {

  
  const Tab = createMaterialTopTabNavigator<RootTabParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Accueil} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Details" component={DetailsPlus} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Contact() {
  const [nom, setData] = useState('');
  const [telephone, setData2] = useState('');
  function handleData(texte: string) {
    setData(texte);
  }
  function handleData2(texte: number) {
    setData2(texte);
  }
  const navigation = useNavigation<MaterialTopTabScreenProps<RootTabParamList, 'Contact'>['navigation']>();
  return (
    <>
      <TextInput placeholder='Saisir votre nom' onChangeText={handleData}></TextInput>
          <Text>Nom : {nom}</Text>
          <TextInput placeholder='Saisir votre numéro de téléphone' onChangeText={handleData2}></TextInput>
          <Text>Téléphone : {telephone}</Text>
           <Button title="Ajouter" onPress={add} />
      <AddContact nom='Natacha' telephone={459657855} />
      <AddContact nom='Natacha' telephone={459657855} />
      <AddContact nom='Natacha' telephone={459657855} />
      <Button 
        title="Home" 
        onPress={() => navigation.navigate('Home')}
      />
      <Button 
        title="Details" 
        onPress={() => navigation.navigate('Details')}
      />
    </>
  );
}

async function add() {
  try {
    await AsyncStorage.setItem('mykey', 'myvalue');
  } catch (error) {
    console.error(error);
  }
}

// Typage du composant Accueil
function Accueil() {
  // Types inférés automatiquement grâce au ParamList
  const navigation = useNavigation<MaterialTopTabScreenProps<RootTabParamList, 'Home'>['navigation']>();

  return (
    <>
      <Button 
        title="Ajouter Contact" 
        onPress={() => navigation.navigate('Contact')}
      />
      <Button 
        title="Details" 
        onPress={() => navigation.navigate('Details')}
      />
    </>
  );
}

function DetailsPlus() {
  // Types inférés automatiquement grâce au ParamList
  const navigation = useNavigation<MaterialTopTabScreenProps<RootTabParamList, 'Details'>['navigation']>();

  return (
    <>
      <Button 
        title="Ajouter Contact" 
        onPress={() => navigation.navigate('Contact')}
      />
      <Button 
        title="Home" 
        onPress={() => navigation.navigate('Home')}
      />
    </>
  );
}

export default App;

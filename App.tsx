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
import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'; // Types pour Tab Navigator [web:18]

// Définir les types des paramètres du Tab Navigator
type RootTabParamList = {
  Home: undefined;
  Contact: undefined;
  Details: undefined;
};

function App() {
  const Tab = createMaterialTopTabNavigator<RootTabParamList>(); // Types appliqués au navigator [web:18]

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
  const navigation = useNavigation<MaterialTopTabScreenProps<RootTabParamList, 'Contact'>['navigation']>();
  return (
    <>
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

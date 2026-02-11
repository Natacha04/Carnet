/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AddContact from './src/components/AddContact';
import Details from './src/components/Details';
import HomeComponent from './src/components/HomeComponent';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { } from 'react-native';

function App() {

  const Tab = createMaterialTopTabNavigator();
 
  return (
    <>
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contact" component={HomeComponent} />
        <Tab.Screen name="Détails" component={Details} />
        <Tab.Screen name="Ajout" component={AddContact} />
      </Tab.Navigator>
    </NavigationContainer>
     </>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AddContact from './src/components/AddContact';
import Details from './src/components/Details';
import HomeComponent from './src/components/HomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { } from 'react-native';

function App() {
 
  return (
    <>
     <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
     </>
  );
}

export default App;

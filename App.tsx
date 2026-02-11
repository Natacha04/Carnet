/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'; 
import { useCallback, useEffect, useState } from 'react';
import AddContact from './src/components/AddContact';

type RootTabParamList = {
  Home: undefined;
  Contact: undefined;
  Details: undefined;
};

type Contact = {
  nom: string;
  telephone: number;
  id: string;
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

function Accueil() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const navigation = useNavigation<MaterialTopTabScreenProps<RootTabParamList, 'Home'>['navigation']>();

  useEffect(() => {
    loadContacts();
  }, []);

 const loadContacts = async () => {
  try {
    const data = await AsyncStorage.getItem('contacts');
    setContacts(data ? JSON.parse(data) : []);
  } catch (error) {
    console.error('Erreur chargement contacts:', error);
    Alert.alert('Erreur', 'Impossible de charger les contacts');
  }
};

  useFocusEffect(
  useCallback(() => {
    loadContacts();
  }, [])
);

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Button 
        title="Ajouter Contact" 
        onPress={() => navigation.navigate('Contact')}
      />
      
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AddContact nom={item.nom} telephone={item.telephone} />
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

function Contact() {
  const [nom, setNom] = useState<string>('');
  const [telephone, setTelephone] = useState<string>('');
  const navigation = useNavigation<MaterialTopTabScreenProps<RootTabParamList, 'Contact'>['navigation']>();

  async function add() {

    if (!nom.trim() || !telephone.trim()) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    try {
      const phoneNumber = parseInt(telephone.replace(/\D/g, '')) || 0;
      if (phoneNumber === 0) {
        Alert.alert('Erreur', 'Numéro de téléphone invalide');
        return;
      }

      const newContact: Contact = {
        nom: nom.trim(),
        telephone: phoneNumber,
        id: Date.now().toString()
      };

      const existingData = await AsyncStorage.getItem('contacts');
      const contacts: Contact[] = existingData ? JSON.parse(existingData) : [];
      
      contacts.push(newContact);
      await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
      
      Alert.alert('Succès', 'Contact ajouté avec succès');
      
      setNom('');
      setTelephone('');
      navigation.navigate('Home');
      
    } catch (error) {
      console.error('Erreur ajout contact:', error);
      Alert.alert('Erreur', 'Erreur lors de l\'ajout du contact');
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput 
        placeholder="Saisir votre nom" 
        value={nom}
        onChangeText={setNom}
        style={{ 
          borderWidth: 1, 
          borderColor: '#ccc', 
          padding: 10, 
          marginBottom: 10,
          borderRadius: 5
        }}
      />
      <Text style={{ marginBottom: 10, fontSize: 16 }}>Nom : {nom}</Text>
      
      <TextInput 
        placeholder="Saisir votre numéro de téléphone" 
        value={telephone}
        keyboardType="phone-pad"
        onChangeText={setTelephone}
        style={{ 
          borderWidth: 1, 
          borderColor: '#ccc', 
          padding: 10, 
          marginBottom: 10,
          borderRadius: 5
        }}
      />
      <Text style={{ marginBottom: 20, fontSize: 16 }}>Téléphone : {telephone}</Text>
      
      <Button title="Ajouter" onPress={add} />
      
      <Button 
        title="Home" 
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function DetailsPlus() {
  const navigation = useNavigation<MaterialTopTabScreenProps<RootTabParamList, 'Details'>['navigation']>();

  return (
    <View style={{ padding: 20 }}>
      <Button 
        title="Ajouter Contact" 
        onPress={() => navigation.navigate('Contact')}
      />
      <Button 
        title="Home" 
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default App;

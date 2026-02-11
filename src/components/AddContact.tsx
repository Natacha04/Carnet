import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useState } from "react";
import { Alert, Button, StyleSheet } from "react-native";
import { Text } from "react-native-gesture-handler"

type propsContact= {
    nom : string;
    telephone : number;
}

function AddContact( props: propsContact ) {
     const [nom, setNom] = useState('');

     function handleData(text: string) {
    setNom(text);

  async function add() {
    try {
      await AsyncStorage.setItem('name', name);
      Alert.alert('Le nom a été ajouté avec succès!')
    } catch (error) {
      console.error(error);
    }
  }

       const handlePress = () => {
    Alert.alert('Informations enregistrées !');
  };

    const Tab = createMaterialTopTabNavigator();

  
  }
    return(
        <>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: '600', padding: 10 }} >Nom : {props.nom}</Text>
         <Text style={styles.text}>Telephone : {props.telephone}</Text>
          <TextInput placeholder='Saisir votre nom' onChangeText={handleData}></TextInput>
          <Text>Nom : {nom}</Text>
          <TextInput placeholder='Saisir votre numéro de téléphone' onChangeText={handleData}></TextInput>
          <Text>Téléphone : {telephone}</Text>
           <Button title="Ajouter" onPress={add} />
        </>
    );
}

const styles = StyleSheet.create({
   text: {
    color: 'black',
     fontSize: 18,
      padding: 10,
  }
});

export default AddContact;
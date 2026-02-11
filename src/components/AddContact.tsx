import { StyleSheet } from "react-native";
import { Text } from "react-native-gesture-handler";

type propsContact= {
    nom : string;
    telephone : number;
}

function AddContact( props: propsContact ) {
    return(
        <>
        <Text style={styles.titre}>Nom : {props.nom}</Text>
         <Text style={styles.text}>Telephone : {props.telephone}</Text>
        </>
    );
}

const styles = StyleSheet.create({
  titre: {
    color: 'black',
     fontSize: 18,
      fontWeight: '600', 
      padding: 10,
  },
   text: {
    color: 'black',
     fontSize: 18,
      padding: 10,
  }
});

export default AddContact;
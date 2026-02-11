/* eslint-disable react-native/no-inline-styles */
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-gesture-handler';

type propsContact = {
  nom: string;
  telephone: number;
};

function AddContact(props: propsContact) {
  return (
    <>
      <Text
        style={{ color: 'black', fontSize: 18, fontWeight: '600', padding: 10 }}
      >
        Nom : {props.nom}
      </Text>
      <Text style={styles.text}>Telephone : {props.telephone}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 18,
    padding: 10,
  },
});

export default AddContact;

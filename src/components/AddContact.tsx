import { Text } from "react-native-gesture-handler";

type propsContact= {
    nom : string;
    telephone : number;
}

function AddContact( props: propsContact ) {
    return(
        <>
        <Text>Nom : {props.nom}</Text>
         <Text>Telephone : {props.telephone}</Text>
        </>
    );
}



export default AddContact;
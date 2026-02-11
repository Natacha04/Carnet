import { Text } from "react-native-gesture-handler";

type propsContact= {
    nom : string;
    telephone : number;
}

function AddContact( props: propsContact ) {
    return(
        <>
        <Text>{props.nom}{props.telephone}</Text>
        </>
    );
}



export default AddContact;
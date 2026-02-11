import { Text } from "react-native-gesture-handler";

type propsContact= {
    nom : string;
    telephone : number;
}

function AddContact( props: propsContact ) {
    return(
        <>
        <Text>{props.nom}{props.telephone}</Text>
        <Text>Dans cette page y'a r 2</Text>
        </>
    );
}



export default AddContact;
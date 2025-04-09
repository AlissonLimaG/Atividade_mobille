import { View, StyleSheet } from "react-native"
import Contato from "../components/Contato"
import { Avatar, ListItem } from "react-native-elements"

export default ListaDeContatos = ({ navigation }) => (

    <View style={styles.container}>
        <View style={styles.listaContatosContainer}>
            <Contato
                avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                name={'Alisson'}
                number={'81 91234-4321'}
                email={'alisson@gmail.com'}
                navigation={navigation}
            />
            <Contato
                avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                name={'Luana'}
                number={'81 91464-4321'}
                email={'luana@gmail.com'}
                navigation={navigation}
            />
            <Contato
                avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                name={'Lilian'}
                number={'81 91294-4321'}
                email={'lilian@gmail.com'}
                navigation={navigation}
            />
        </View>
    </View>


)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        margin: 'auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: '5'

    },
    listaContatosContainer: {
        display: 'flex',
        width: '100%',
        maxWidth: '500px',
    }
})
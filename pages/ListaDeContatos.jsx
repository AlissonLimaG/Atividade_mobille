import { View, StyleSheet } from "react-native"
import Contato from "../components/Contato"
import { useEffect, useState } from "react"
import ContactsService from "../services/ContactsService"

export default ListaDeContatos = ({ navigation }) => {
    const [getContatos, setContatos] = useState([]);

    useEffect(() => {
        const carregarContatos = async () => {
            const contatos = await ContactsService.findAll();
            setContatos(contatos);
        }

        carregarContatos();

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.listaContatosContainer}>
                {getContatos.map((contato) => (
                    <Contato
                        key={contato.id}
                        id={contato.id}
                        avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                        name={contato.nome}
                        number={contato.telefone}
                        email={contato.email}
                        navigation={navigation}
                    />
                ))}
            </View>
        </View>


    )
}

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
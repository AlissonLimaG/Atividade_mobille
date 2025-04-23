import { View, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements"
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import ContactsService from "../services/ContactsService";
import UserService from "../services/UserService";

export default CadastroContato = ({ navigation }) => {

    const route = useRoute();
    const { name, number, email, id } = route.params;

    const [getNome, setNome] = useState(name);
    const [getTelefone, setTelefone] = useState(number);
    const [getEmail, setEmail] = useState(email);

    const deletarContato = async () => {
        const res = await ContactsService.delete(id);
        alert(res.statusText);
        if (res.statusText == "OK") navigation.navigate('contatos')
    };

    const atualizarContato = async () => {
        console.log(id)
        const data = {
            id: id,
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
        }

        console.log(id)

        const res = await ContactsService.update(data);
        alert(res.statusText);
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Input
                    placeholder="Nome"
                    style={styles.input}
                    value={getNome}
                    onChangeText={setNome}
                />
                <Input
                    placeholder="Email"
                    style={styles.input}
                    value={getEmail}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="Telefone"
                    style={styles.input}
                    value={getTelefone}
                    onChangeText={setTelefone}
                />
                <View style={{ width: '100%', marginTop: 16 }}>
                    <Button
                        title='Alterar'
                        onPress={atualizarContato}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <Button
                        title='Excluir'
                        onPress={deletarContato}
                        buttonStyle={{ backgroundColor: 'red' }}
                    />
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        margin: 'auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        marginBottom: 32
    },
    form: {
        gap: '1rem',
        width: '90%',
        maxWidth: '500px',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 24,
    },
    cadastroTitle: {
        fontSize: 48,
        position: 'realative',
        top: '15px',
        fontWeight: '500',
        marginBottom: 64
    },
    esqueceuSenhaTitle: {
        fontSize: 32,
        marginBottom: 32
    }
});
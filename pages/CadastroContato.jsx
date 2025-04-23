import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements"
import ContactsService from "../services/ContactsService";

export default CadastroContato = ({navigation}) => {

    const [getNome,setNome] = useState();
    const [getEmail,setEmail] = useState();
    const [getTelefone,setTelefone] = useState();

    const cadastrarContato = async () =>{
        const data = {
            nome:getNome,
            email:getEmail,
            telefone:getTelefone
        }

        const res = await ContactsService.save(data);
        alert(res.statusText)
        if(res.statusText == "Created") navigation.navigate('contatos')
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
                        title='Salvar'
                        onPress={cadastrarContato}
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
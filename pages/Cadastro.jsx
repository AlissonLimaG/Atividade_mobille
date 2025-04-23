import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements"
import UserService from "../services/UserService"

export default cadastro = ({ navigation }) => {
    const [getId, setId] = useState(0);
    const [getNome, setNome] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getCpf, setCpf] = useState('');
    const [getSenha, setSenha] = useState('');

    const saveUser = () => {
        setId(getId + 1);

        const data = {
            id: getId,
            nome: getNome,
            email: getEmail,
            cpf: getCpf,
            senha: getSenha
        }

        console.log(data);

        UserService.save(data);
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
                    placeholder="CPF"
                    style={styles.input}
                    value={getCpf}
                    onChangeText={setCpf}
                />
                <Input
                    placeholder="Senha"
                    style={styles.input}
                    value={getSenha}
                    onChangeText={setSenha}
                />
                <View style={{ width: '100%', marginTop: 16 }}>
                    <Button
                        title='Cadastrar'
                        onPress={saveUser}
                    />
                </View>

                <View style={{ width: '100%', marginTop: 16 }}>
                    <Button
                        title='Login'
                        onPress={() => navigation.navigate('login')}
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
        width: '90%',
        maxWidth: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 24,

    },
    esqueceuSenhaTitle: {
        fontSize: 32,
        marginBottom: 32
    }
});
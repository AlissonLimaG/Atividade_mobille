import { View, Text, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements"

export default cadastro = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Input
                    placeholder="Nome"
                    style={styles.input}
                />
                <Input
                    placeholder="Email"
                    style={styles.input}
                />
                <Input
                    placeholder="CPF"
                    style={styles.input}
                />
                <Input
                    placeholder="Senha"
                    style={styles.input}
                />
                <View style={{ width: '100%', marginTop: 16 }}>
                    <Button
                        title='Cadastrar'
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
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Input, Button } from "react-native-elements";

export default Login = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.avatar}>
                    <Avatar
                        icon={{ name: 'person' }}
                        rounded
                        size="large"
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }} />
                </View>
                <Input
                    placeholder="Email"
                />
                <Input
                    placeholder="Senha"
                />

                <View style={{ width: '100%', marginBottom: 16 }}>
                    <Button
                        title='Entrar'
                        onPress={() => navigation.navigate('contatos')}
                        buttonStyle={{
                            marginTop: 16,
                        }} />
                </View>
                <View style={{ width: '100%', marginBottom: 24 }}>
                    <Button
                        title='Cadastre-se'
                        onPress={() => navigation.navigate('cadastro')}
                    />
                </View>

                <Text
                    style={{ cursor: 'pointer' }}
                    onPress={() => navigation.navigate('recuperar')}
                >
                    Esqueceu a senha?
                </Text>
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
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6
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
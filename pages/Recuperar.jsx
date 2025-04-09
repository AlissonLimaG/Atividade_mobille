import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from "react-native-elements";

export default Recuperar = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.esqueceuSenhaTitle}>Recuperar Senha</Text>
                <Input
                    placeholder="Email"
                    style={styles.input}
                />

                <View style={{ width: '100%' }}>
                    <Button
                        title='Enviar'
                        buttonStyle={{
                            marginBottom: '15px',
                            marginTop: 24
                        }} />
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
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
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
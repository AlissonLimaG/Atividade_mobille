import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from "react-native-elements";

export default Recuperar = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Input
                    placeholder="Email"
                    style={styles.input}
                />

                <View style={{ width: '100%' }}>
                    <Button
                        onPress={() => navigation.navigate('login')}
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
import { View, Text, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements"
import { useRoute } from "@react-navigation/native";

export default CadastroContato = () => {
    const route = useRoute();
    const {name, number, email} = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Input
                    placeholder="Nome"
                    style={styles.input}
                    value={name}
                />
                <Input
                    placeholder="Email"
                    style={styles.input}
                    value={email}
                />
                <Input
                    placeholder="Telefone"
                    style={styles.input}
                    value={number}
                />
                <View style={{ width: '100%', marginTop: 16 }}>
                    <Button
                        title='Alterar'
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <Button
                        title='Excluir'
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
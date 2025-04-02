import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Input, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};



const login = () => (
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
        style={styles.input}

      />
      <Button
        title='Entrar'
        buttonStyle={{
          width: 285,
          marginTop:'1rem',
          marginBottom: '10px'
        }} />
      <Button
        title='Cadastre-se'
        buttonStyle={{
          width: 285,
          marginBottom: '15px'
        }} />

      <Text>
        Esqueceu a senha?
      </Text>
    </View>

  </View>
)

const cadastro = () => (
  <View style={styles.container}>
    <Text style={styles.cadastroTitle}>Cadastro</Text>
    <View style={styles.form}>
      <Input
        placeholder="Nome"
      />
      <Input
        placeholder="Email"
      />
      <Input
        placeholder="Senha"
        style={styles.input}
      />
      <Button
        title='Cadastrar'
        buttonStyle={{
          width: 285,
          marginBottom: '15px'
        }} />
    </View>

  </View>
)

const recuperar = () => (
  <View style={styles.container}>
    <Text style={styles.cadastroTitle}>Esqueceu a Senha</Text>
    <View style={styles.form}>
      <Input
        placeholder="Email"
      />

      <Button
        title='Enviar'
        buttonStyle={{
          width: 285,
          marginBottom: '15px'
        }} />
    </View>

  </View>
)


export default login;
;

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
    marginBottom: '2rem'
  },
  form: {
    width:'330px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '1rem',
    borderRadius: '8px'
  },
  cadastroTitle:{
    fontSize:'2rem',
    position:'absolute',
    top:'15px',
    fontWeight:'500'
  }
});
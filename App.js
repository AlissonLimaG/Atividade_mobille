import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Recuperar from "./pages/Recuperar";
import ListaDeContatos from "./pages/ListaDeContatos";
import CadastroContato from "./pages/CadastroContato";
import { Ionicons } from "@expo/vector-icons";
import ContatoInfo from "./pages/ContatoInfo";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">

        <Stack.Screen
          name="login"
          component={Login}
        />

        <Stack.Screen
          name="cadastro"
          component={Cadastro}
        />

        <Stack.Screen
          name="recuperar"
          component={Recuperar}
        />

        <Stack.Screen
          name="detalhesContato"
          component={ContatoInfo}
        />

        <Stack.Screen
          name="contatos"
          component={ListaDeContatos}
          options={{
            headerRightAlterar: ({ navigation }) => (
              <Ionicons
                name="add-outline"
                size={24}
                color='black'
                style={{ marginRight: 10, cursor: 'pointer' }}
              />
            )
          }}
        />

        <Stack.Screen
          name="cadastroContato"
          component={CadastroContato}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
};


export default App;



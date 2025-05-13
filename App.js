import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Recuperar from "./pages/Recuperar";
import ListaDeContatos from "./pages/ListaDeContatos";
import CadastroContato from "./pages/CadastroContato";
import ContatoInfo from "./pages/ContatoInfo";
import AddButton from "./components/AddButton";
import FlashMessage from "react-native-flash-message";
import LogoutButton from "./components/LogoutButton";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">

          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="cadastro"
            component={Cadastro}
            options={{
              headerTitle: 'Usuario',
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen
            name="recuperar"
            component={Recuperar}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="detalhesContato"
            component={ContatoInfo}
            options={{
              headerTitle: 'Contato',
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen
            name="contatos"
            component={ListaDeContatos}
            options={{
              headerTitle: 'Contatos',
              headerTitleAlign: 'center',
              headerRight: () => <AddButton />,
              headerLeft: () => <LogoutButton />
            }}
          />

          <Stack.Screen
            name="cadastroContato"
            component={CadastroContato}
            options={{
              headerTitle: 'Contato',
              headerTitleAlign: 'center',
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position={"top"} />
    </>
  )
};


export default App;



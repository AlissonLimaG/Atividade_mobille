import axios from "axios"
import API_PATH from "../enviroment"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseService from "./FirebaseService";
import { showMessage } from "react-native-flash-message";

export default userService = {

    findAll: async () => {
        return await axios.get(API_PATH + "usuario");
    },

    save: async (data) => {

        const firebaseAuth = await FirebaseService.create(data.email, data.senha);

        if (!firebaseAuth) {
            showMessage({
                message: "Erro",
                type: "danger",
                description: "Falha ao cadastrar usuário."
            })

            return false;
        };

        await axios.post(
            API_PATH + "usuario",
            {
                id: data.id,
                nome: data.nome,
                cpf: data.cpf,
                email: data.email,
                senha: data.senha
            }
        ).then(response => {
            showMessage({
                message: "Sucesso!",
                type: "success",
                description: "Usuário criado com sucesso!"
            })

        }).catch(err => {
            console.log(err.mesage);
        })

        return true;

    },


    login: async (data) => {
        const logged = await FirebaseService.login(data.email, data.senha);
        if (!logged) return false;
        return true;
    },

    
    logout: async () => {

    }

}
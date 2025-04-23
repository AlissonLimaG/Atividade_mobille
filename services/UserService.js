import axios from "axios"
import API_PATH from "../enviroment"

export default userService = {

    save: async (data) => {
        await axios.post(
            API_PATH + "usuario",
            {
                id:data.id,
                nome:data.nome,
                cpf:data.cpf,
                email:data.email,
                senha:data.senha
            }
        ).then(response => alert(response.statusText))
         .catch(err => alert(err))
    },

    findAll: async () => {
        return await axios.get(API_PATH + "usuario");
    },    
    
    login: async (data) => {
        const users = await axios.get(API_PATH + "usuario");
        const usersArray = Array.from(users);

        const user = usersArray.filter(u => data.email == u.email && data.senha == u.senha).length;

        console.log(data)

        if(user == 1) return true;
        else return false;
    },

    login: async (data) => {
        const users = (await axios.get(API_PATH + "usuario")).data;
        const usersArray = Array.from(users);

        const user = usersArray.filter(u => data.email == u.email && data.senha == u.senha).length;

        console.log(data)

        if(user == 1) return true;
        else return false;
    }

}
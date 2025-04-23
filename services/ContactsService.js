import axios from 'axios'
import API_URL from '../enviroment'

export default ContactService = {

    save: async (data)=>{
        const res = await axios.post(
            API_URL + "contato",
            {
                nome:data.nome,
                email:data.email,
                telefone:data.telefone
            }
        )
        return res;
    },

    findAll: async () => {
        const contatos = await axios.get(API_URL + "contato").then(res => res.data);
        console.log(contatos)
        return contatos
    },

    update: async (data) => {
        const res = await axios.put(
            API_URL + "contato/" + data.id,
            {
                nome:data.nome,
                email:data.email,
                telefone:data.telefone
            }
        )

        return res;
    },

    delete:async (id)=>{
        const res = await axios.delete(API_URL + "contato/" + id)
        return res;
    }

}
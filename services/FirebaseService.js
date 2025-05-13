import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut } 
from "firebase/auth";
import { showMessage } from "react-native-flash-message";

export default FirebaseService = {

    
    create: async (email, senha) => {
        const auth = getAuth();

        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            return true;
        } catch (error) {
            return false;
        }
    },


    login: async (email, senha) => {
        const auth = getAuth();

        try {
            await signInWithEmailAndPassword(auth, email, senha);
            return true;
        } catch (error) {
            console.log(error.message)
            return false;
        }
    },


    logout: async () =>{
        const auth = getAuth();

        try {
            await signOut(auth);
            return true;
        } catch (error) {
            console.log(error.message);
            return false
        }
    }
}
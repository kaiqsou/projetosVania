import api from "../utils/api.jsx";
// import useFlashMessage from "./hooks/useFlashMessage.jsx";
import useFlashMessage from "../hooks/useFlashMessage.jsx";

export default function useAuth()
{
    const {setFlashMessage} = useFlashMessage();
    async function register(user)
    {
        let msgText = "Cadastro realizado com sucesso!";
        let msgType = "success";
        try{
            const data = await api.post('/users/Register', user).then((response)=>{
                return response.data;
            });
            console.log(data);
        }
    
        catch(error){
            msgText = error.response.data.message;
            msgType = "error"
        }
        setFlashMessage(msgText, msgType);
        
    }   // fechamento da função
    return {register};
}   // fechamento da export
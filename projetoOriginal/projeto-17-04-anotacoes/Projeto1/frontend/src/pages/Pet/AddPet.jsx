import useFlashMessage from "../../hooks/useFlashMessage.jsx";
import PetForm from "../../Component/Form/PetForm.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import api from "../../utils/api.jsx";
import styles from "../../Component/Form/Form.module.css";

function AddPet()
{
    const [token] = useState(localStorage.getItem("token") || "");  // localiza o token
    const navigate = useNavigate();
    const {setFlashMessage} = useFlashMessage();

    async function registerPet(pet)
    {
        let msgType = "success";
        let data;
        const formData = new FormData;  // usado pela necessidade de passar arquivos, no nosso caso, imagens

        Object.keys(pet).forEach((key)=> // pega todas as chaves/nomes dos elementos do objeto
        {
            if (key === "imagens")
            {
                for(let i = 0; i < pet[key]; i++)
                {
                    formData.append("imagens", pet[key][i]);    // se for imagem, passará por todas elas para inserir no FormData
                }
            }
            else
            {
                formData.append(key, pet[key]);         // se não for imagem, pega o conteúdo da key para inserir no FormData
            }
        }) 

        try 
        {
            const response = await api.post("pets/create", formData, {
                headers:{Authorization: `Bearer ${JSON.parse(token)}`,
                "Content-Type":"multipart/form-data"}
            })
            data = response.data;    
        } 
        catch (error) 
        {
            msgType = "error";
            data = error.response?.data || {message: "Erro desconhecido"};
        }
        finally
        {
            setFlashMessage(data.message, msgType);
            if (msgType !== "error")
            {
                navigate("/");
            }
        }
    }

    return(
        <section className={styles.form_container}>

            <div>
                <h1>Cadastre o Pet</h1>
            </div>

            <PetForm handleSubmit={registerPet} btnText="Cadastrar"/>
        </section>
    )
}

export default AddPet;
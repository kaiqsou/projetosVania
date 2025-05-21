import PetForm from "../../Component/Form/PetForm.jsx";
import useFlashMessage from "../../hooks/useFlashMessage.jsx";
import {useNavigate, useLocation} from "react-router-dom";
import {useState} from "react";
import api from "../../utils/api.jsx";
import styles from "../../Component/Form/Form.module.css";

function PetDetails()
{
    const {id} = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(()=>{
        async function mostrarPet(){
            try{
                const response = await api.get(`pets/${id}`, {
                    
                }
            )
            navigate("/getDetails");
            }catch(err){
                console.log("Erro ao mostrar pet", err);
                navigate("/getDetails");
            }
        }
        excluirPet();
    },[id, token, navigate])
}

export default PetDetails;
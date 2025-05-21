import PetForm from "../../Component/Form/PetForm.jsx";
import useFlashMessage from "../../hooks/useFlashMessage.jsx";
import {useNavigate, useLocation} from "react-router-dom";
import {useState} from "react";
import api from "../../utils/api.jsx";
import styles from "../../Component/Form/Form.module.css";

function PetDetails()
{
    const {id} = useParams();

    useEffect(()=>
    {
        async function mostrarPet(){}
    }
)
            
}
    

export default PetDetails;
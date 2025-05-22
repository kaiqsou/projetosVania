import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import api from "../../../utils/api";
import styles from "./MessagePage.module.css";

const MessagePage=()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const {pet} = location.state || {};
    const [mensagem, setMensagem] = useState("");

    if (!pet)
    {
        return "<p>Pet não informado</p>";
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try 
        {
            const token = localStorage.getItem("token");
            await api.post("/emails/Send",
            {
                nome: pet.user.name,
                email: pet.user.email,
                mensagem: mensagem
            },
            {
                headers: 
                {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        alert("Mensagem enviada");
        navigate("/");
        } catch (error) {
            console.error("Erro ao enviar a mensagem")
        }
    };

    return (
        <div className={styles.container}>
            <h2>Mensagem</h2>
            <form onSubmit={handleSubmit}>
                <textarea value={mensagem} onChange={(e)=>setMensagem(e.target.value)} placeholder="Digite sua mensagem. Não há necessidade passar dados para contato, pois irá automaticamente no e-mail." className={styles.textarea}/>
                
                <button type="submit" className={styles.button}>Enviar</button>
            </form>
        </div>
    )
}

export default MessagePage;
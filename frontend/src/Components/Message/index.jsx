import {useState, useEffect} from "react";
import Styles from "./Message.module.css";
import bus from "../../utils/bus.jsx";

function Message()
{
    const [message, setMessage] = useState("");          // estado inicial da mensagem
    const [type, setType] = useState("");                // estado inicial do tipo
    const [visibility, setVisibility] = useState(false);
    useEffect(()=>{         // mostra a mensagem uma vez
        bus.addListener("flash",({message, type})=>{    // listener captura a mensagem

            setVisibility(true);
            setMessage(message);
            setType(type);

            setTimeout(()=>{
                setVisibility(false);
            }, 3000)

        })
    },[])
    return(
        visibility && (<div className={`${Styles.message}${Styles[type]}`}>{message}</div>)     // confirmar se há mensagem e exibir mensagem de erro ou sucesso
    )
}

export default Message;
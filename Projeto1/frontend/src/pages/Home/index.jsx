import styles from "./Home.module.css";
import api from "../../utils/api";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Home(){
    const[pets, setPets] = useState([]);
    useEffect(()=>{
        api.get("/pets/getAll").then((response)=>{
            setPets(response.data.pets);
            console.log(response.data.pets);
        })
    }, []) // aqui o useEffect está como um array vazio
    return(
        <section>
            <div className={styles.home}>
                <h1>Bem-vindo ao meu pet sumiu!</h1>
                <h3>Encontre o seu melhor amigo!</h3>
            </div>
            <div className={styles.pet_container}>
                {
                    pets.length > 0 &&      // se o length de pets for maior que zero, seguirá
                    pets.map((pet)=>(
                        <div className={styles.pet_card} key={pet._id}>
                            <div className={styles.pet_card_header}>
                                {pet.situacao}
                            </div>

                            <div className={styles.pet_card_image} style={{backgroundImage:`url(${process.env.REACT_APP_API}/images/pets/${pet.imagens?.[0] || "default.jpg"})`}}>
                            </div>

                            <div className={styles.pet_card_body}>
                                <h3>{pet.nome || "Sem Nome"}</h3>
                                <Link to={`/pet/${pet._id}`} className={styles.details_button}>Ver Detalhes</Link>
                            </div>
                        </div>
                    ))
                }
                {
                    pets.length === 0 &&
                    <p>Não há pets cadastrados no momento!</p>
                }
            </div>
        </section>
    )
}
export default Home;
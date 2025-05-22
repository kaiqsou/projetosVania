import { useLocation } from 'react-router-dom';
import styles from './DetailPet.module.css';
import {useContext} from "react";
import {Context} from "../../../context/UserContext";
import { useNavigate } from 'react-router-dom';
function DetailPet() {
  const location = useLocation();
  const { pet } = location.state || {};
  const backendURL = process.env.REACT_APP_API;
  const {authenticated} = useContext(Context);
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (authenticated) {
      navigate('/mensagem', { state: { pet } });
      
    } else {
      // Redireciona para o login
      navigate('/login');
    }
  };

  if (!pet) {
    return <p>Pet não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detalhes do Pet</h1>

      {/* Dados do Pet */}
      <div className={styles.infoGroup}><span className={styles.label}>Nome:</span><span className={styles.value}>{pet.nome}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Idade:</span><span className={styles.value}>{pet.idade}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Raça:</span><span className={styles.value}>{pet.raca}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Cor Predominante:</span><span className={styles.value}>{pet.corPredominante}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Cor dos Olhos:</span><span className={styles.value}>{pet.corOlhos}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Espécie:</span><span className={styles.value}>{pet.especie}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Gênero:</span><span className={styles.value}>{pet.genero}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Porte:</span><span className={styles.value}>{pet.porte}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Local:</span><span className={styles.value}>{pet.local}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Ponto de Referência:</span><span className={styles.value}>{pet.pontoReferencia}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Data:</span><span className={styles.value}>{pet.data}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Recompensa:</span><span className={styles.value}>{pet.recompensa}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Situação:</span><span className={styles.value}>{pet.situacao}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Comentário:</span><span className={styles.value}>{pet.comentario}</span></div>

      {/* Contato */}
      <h2 className={styles.sectionTitle}>Informações de Contato</h2>
      <div className={styles.infoGroup}><span className={styles.label}>Nome:</span><span className={styles.value}>{pet.user.name}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Email:</span><span className={styles.value}>{pet.user.email}</span></div>
      <div className={styles.infoGroup}><span className={styles.label}>Telefone:</span><span className={styles.value}>{pet.user.phone}</span></div>

      {/* Imagens */}
      {pet.imagens?.length > 0 && (
        <>
          <h2 className={styles.sectionTitle}>Imagens</h2>
          <div className={styles.images}>
            {pet.imagens.map((img, index) => (
              <img
                key={index}
                src={`${backendURL}/images/pets/${img}`}
                alt={`Pet ${index}`}
                className={styles.image}
                onError={(e) =>
                  (e.target.src = `${backendURL}/images/pets/default.jpg`)
                }
              />
            ))}
          </div>
        </>
      )}
      <button onClick={handleContactClick} className={styles.contactButton}>
      Entrar em Contato
      </button>

    </div>
  );
}

export default DetailPet;

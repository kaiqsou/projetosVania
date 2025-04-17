import Input from "./Input.jsx";
import Select from "./Select.jsx";
import {useState} from "react";

function PetForm({handleSubmit, petData, btnText})
{
    const {pet, setPet} = useState(petData || {});
    const {preview, setPreview} = useState([])
    const situacao = ["Perdido", "Procurando Tutor"];
    const genero = ["Macho", "Fêmea"];
    const porte = ["Grande", "Médio", "Pequeno"];

    function onFileChange(e)
    {
        console.log(e.target.files)   /* traz uma lista do input files e não um array, por isso é preciso fazer a transformação */
        setPreview(Array.from(e.target.files));
        setPet({...pet,imagens:[...e.target.files]});
    }

    function handleChange(e)
    {
        setPet({...pet, [e.target.name]:e.target.value})    // campo entre [] pois é mudado
    }

    function handleSituacao(e)
    {
        setPet({...pet, situacao:e.target.options[e.target.selectedIndex].text})        // tá pegando a option selecionada no select
    }

    function handlePorte(e)
    {
        setPet({...pet, porte:e.target.options[e.target.selectedIndex].text})     
    }

    function handleGenero(e)
    {
        setPet({...pet, genero:e.target.options[e.target.selectedIndex].text})      
    }

    function submit(e)
    {
        e.preventDefault();  // não recarrega a página
        console.log(pet);   // ver o pet
        handleSubmit(pet);
    }
    return(
        <form onSubmit={submit}>
            <div>       
            {
                preview &&
                preview.length > 0
                ?preview.map((image, index)=>(
                    <img src={URL.createObjectURL(image)} alt={pet.nome} key={`${pet.nome}+${index}`} />
                ))
                :pet && pet.imagens &&
                pet.imagens.map((image, index)=>(   // process.env.REACT_APP_API ajuda a buscar a imagem
                    <img src={`${process.env.REACT_APP_API}/images/pets/${image}`} alt={image} key={`${pet.nome}+${index}`} />    
                ))
            }
            </div>
            {
                pet&&
                <div>
                <Input 
                text = "Imagens do Pet"
                type = "file"
                name = "imagens"
                handleOnChange = {onFileChange}
                multiple = {true}
            />

            <Input 
                text = "Nome"
                type = "text"
                name = "nome"
                handleOnChange = {handleChange}     // os tipos textos utilizam handleChange
                value = { pet.nome || ""}
            />

            <Input 
                text = "Idade"
                type = "text"
                name = "idade"
                handleOnChange = {handleChange}     
                value = {pet.idade || ""}
            />

            <Input 
                text = "Raca"
                type = "text"
                name = "raca"
                handleOnChange = {handleChange}     
                value = {pet.raca || ""}
            />

            <Input 
                text = "Cor Predominante"
                type = "text"
                name = "corPredominante"
                handleOnChange = {handleChange}     
                value = {pet.corPredominante || ""}
            />

            <Input 
                text = "Cor dos Olhos"
                type = "text"
                name = "corOlhos"
                handleOnChange = {handleChange}     
                value = {pet.corOlhos || ""}
            />

            <Input 
                text = "Espécie"
                type = "text"
                name = "especie"
                handleOnChange = {handleChange}     
                value = {pet.especie || ""}
            />

            <Select 
                text = "Gênero"
                name = "genero"
                options = {genero}
                handleOnChange = {handleGenero}     // HANDLE criado pro genero
                value = {pet.genero || ""}
            />

            <Select 
                text = "Porte"
                name = "porte"
                options = {porte}
                handleOnChange = {handlePorte}
                value = {pet.porte || ""}
            />

            <Input 
                text = "Local"
                type = "text"
                name = "local"
                handleOnChange = {handleChange}     
                value = {pet.local || ""}
            />

            <Input 
                text = "Ponto de Referência"
                type = "text"
                name = "pontoReferencia"
                handleOnChange = {handleChange}     
                value = {pet.pontoReferencia || ""}
            />

            <Input 
                text = "Data"
                type = "date"
                name = "data"
                handleOnChange = {handleChange}     
                value = {pet.data || ""}
            />

            <Input 
                text = "Recompensa"
                type = "text"
                name = "recompensa"
                handleOnChange = {handleChange}     
                value = {pet.recompensa || ""}
            />

            <Select 
                text = "Situação"
                name = "situacao"
                options = {situacao}
                handleOnChange = {handleSituacao}
                value = {pet.situacao || ""}
            />

            <Input 
                text = "Comentário"
                type = "text"
                name = "comentario"
                handleOnChange = {handleChange}     
                value = {pet.comentario || ""}
            />
            </div>
            
            }
            

            <input type="submit" value={btnText}/>
        </form>
    )
}

export default PetForm;
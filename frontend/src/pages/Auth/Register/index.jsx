import styles from "../../../Components/Form/Form.module.css";
import {useState, userContext} from "react";
import Input from "../../../Components/Form/input.jsx";
// import {Context} from "../../../Context/userContext.jsx"


function Register()
{
    const [user, setUser] = userState({});         // estado inicial do objeto user é vazio, userState({}), já que a pessoa ainda não digitou algo
    
    function handleSubmit(e){                      // parametro "e" é o evento que acontece quando aperta o botão submit, guardando as informaçoes do input
        e.preventDefault();
        console.log(user);
    }

    function handleChange(e){
        setUser({...user, [e.target.name]:e.target.value})           // user contém as informaçoes originais/antigas e o "e" é a atualização que substituirá
    }
    return(
        <section className={styles.form_container}> 

        <h1>Register</h1>
        <form onSubmit={handleSubmit}>        
            <Input
            text = "Nome"       // como se fosse um label, os inputs são para pegar os dados
            type = "text"
            name = "name"
            placeholder = "Digite o seu nome"
            handleOnChange = {handleChange}            // quando disparar, chamar a função handleChange
            />
               
            <Input
            text = "E-mail"      
            type = "email"
            name = "email"
            placeholder = "Digite o seu e-mail"
            handleOnChange = {handleChange}         
            />

            <Input
            text = "Senha"      
            type = "password"
            name = "password"
            placeholder = "Digite a sua senha"
            handleOnChange = {handleChange}         
            />

            <Input
            text = "Confirme a senha"      
            type = "password"
            name = "confirmPassword"
            placeholder = "Confirme a sua senha"
            handleOnChange = {handleChange}         
            />

            <Input    
            type = "submit"
            value = "Cadastrar"
            handleOnChange = {handleChange}         
            />

        </form>

        </section>
        
    )
}

export default Register
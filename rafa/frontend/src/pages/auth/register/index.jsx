import styles from '../../../components/form/Form.module.css'
import Input from '../../../components/form/Input'
import { useState, useContext } from 'react'
import {Context} from '../../../context/userContext'
import register from '../../../components/hooks/useAuth'
function Register() {
    const [user, setUser] = useState({})
    const {register} = useContext(Context);
    function handleSubmit (e) {
        e.preventDefault()
        console.log(user)
        register(user)
    }
    function handleChange (e) {
        setUser({...user, [e.target.name]:e.target.value})
    } 
    return (
        <section className={styles.form_container}>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <Input text='Nome' type='text' name='name' placeholder='Digite seu nome' handleChange={handleChange} />
                <Input text='Email' type='email' name='email' placeholder='Digite seu email' handleChange={handleChange} />
                <Input text='Telefone' type='tel' name='phone' placeholder='Digite seu telefone' handleChange={handleChange} />
                <Input text='Senha' type='password' name='password' placeholder='Digite sua senha' handleChange={handleChange} />
                <Input text='Confirmar Senha' type='password' name='confirmpassword' placeholder='Confirme sua senha' handleChange={handleChange} />
                <Input type='submit' name='submit' value='cadastrar' handleChange={handleChange} />

            </form>
        </section>
    )
}

export default Register


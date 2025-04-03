import styles from '../../../components/form/Form.module.css'
import Input from '../../../components/form/Input'
import { useState, useContext } from 'react'
import {Context} from '../../../context/userContext'
import login from '../../../components/hooks/useAuth'
function Login() {
    const [user, setUser] = useState({})
    const {login} = useContext(Context);
    function handleSubmit (e) {
        e.preventDefault()
        console.log(user)
        login(user)
    }
    function handleChange (e) {
        setUser({...user, [e.target.name]:e.target.value})
    } 
    return (
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input text='Email' type='email' name='email' placeholder='Digite seu email' handleChange={handleChange} />
                <Input text='Senha' type='password' name='password' placeholder='Digite sua senha' handleChange={handleChange} />
                <Input type='submit' name='submit' value='cadastrar' handleChange={handleChange} />
            </form>
        </section>
    )
}

export default Login


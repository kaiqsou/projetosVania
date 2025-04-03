import api from '../utils/api.jsx'
import useFlashMessage from './useFlashMessage.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function useAuth() {
    const [authenticated, setAutenticated] = useState(false)
    const navigate = useNavigate()
    const { setFlashMessage } = useFlashMessage()
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAutenticated(true)
        }
    }, [])
    async function register(user) {
        let msgText = "Cadastro realizado com sucesso!"
        let msgType = "success"
        try {
            const data = await api.post('/users/register', user).then((response) => { return response.data });
            console.log(data);
        } catch (e) {
            msgText = e.response.data.message;
            msgType = "error";
        }
        finally{
            setFlashMessage(msgText, msgType)}
        
    }
    
    async function login(user) {
        let msgText = "Login realizado com sucesso!"
        let msgType = "success"
        try {
            const response = await api.post('/users/login', user); // linha do login
            await authUser(response.data)                          // verificação/autenticação
            console.log(response);
            navigate("/");
            return response.data
        } catch (e) {
            msgText = e.response.data.message
            msgType = 'error'
        }
        setFlashMessage(msgText, msgType)
    }
    async function authUser(data) {
        setAutenticated(true)
        localStorage.setItem("token", JSON.stringify(data.token))
    }
    async function logout() {
        let msgText = "Logout realizado com sucesso!"
        let msgType = "success"
        setAutenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        navigate('/')
        setFlashMessage(msgText, msgType)
    }
    return { register, login, logout, authenticated }
} 
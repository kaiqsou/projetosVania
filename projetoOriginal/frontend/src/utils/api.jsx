import axios from "axios";   // faz a conexão com o back

export default axios.create({
    baseURL: "http://localhost:5000"
})

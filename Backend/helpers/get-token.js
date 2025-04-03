const getToken = (req)=>{   // pega a requisição do token que está vindo     
    const authHeader = req.headers.authentication;
    const token = authHeader.split("")[1];      // pega o token atraves do header authorization no useAuth, usando o split que separa o Bearer do Token em arrays
    return token
};

export default getToken;
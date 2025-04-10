import { createContext } from "react"; // contexto ajuda a compartilhar dados sem precisar determinar propriedades
import useAuth from "../hooks/useAuth.jsx";

const Context = createContext();

function UserProvider({children}){      // children é usado para cada vez conseguir passar valores diferentes 
    const {register} = useAuth();
    return <Context.Provider value={{register}}> {children} </Context.Provider>
}

export {Context, UserProvider};
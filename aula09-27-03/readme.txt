Problemas corrigidos.

1 - No arquivo pages/Auth/Register/index.jsx

faltou declarar o contexto. Acrescentei a linha

const {register} = useContext(Context);


2 - No arquivo hooks/useAuth

estava export default function userAuth(){
O nome é useAuth e não userAuth
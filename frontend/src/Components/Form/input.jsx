import styles from "./Input.module.css";

function Input({
    type,
    text,
    name,
    value,
    placeholder,
    handleOnChange          // vai executar quando houver mudanças para controlar o estado delas
}){
   <div className={styles.form_control}>
    <label htmlFor={name}>{text}</label>         
        <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={handleOnChange}/>
    
   </div> 
}

export default Input()
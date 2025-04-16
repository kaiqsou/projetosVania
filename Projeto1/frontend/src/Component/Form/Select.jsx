function Select({text, name, options, handleOnChange}) // é a função do SELECT do achados e perdidos
{
    return(
        <div>
            <label htmlFor={name}>{text}</label>
            <select name="{name}" id="{name}" onChange={handleOnChange} value={value || ""}>    
                <option>Escolha uma opção</option>
                {
                    options.map((option)=>(
                        <option value={option} key={option}>{option}</option>        // forEach não retorna nada, maps retorna um array novo
                    ))
                }   
              
            </select>
        </div>
    )
}

export default Select;
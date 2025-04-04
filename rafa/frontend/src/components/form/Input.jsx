import React from "react";
import styles from './Input.module.css'

export default function Input ({type, name, placeholder, value, text, handleChange}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>
                {text}
            </label>
            <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={handleChange}/>
        </div>
    )
}
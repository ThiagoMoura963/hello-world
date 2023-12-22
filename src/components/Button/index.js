import styles from "./Button.module.css";

const Button = ({ children, length }) => {
    return (
        <button 
          className={`
            ${styles.button} 
            ${styles[length]}
        `}>
            {children}
        </button>
    )
}

export default Button;
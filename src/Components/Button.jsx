import styles from './Button.module.css'
function Button({children, onClick, type}) {
    return (
        <div className = {styles.btn}>
            {children}
        </div>
    )
}

export default Button

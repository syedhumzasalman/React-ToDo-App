import styles from "./ButtonCom.module.css"

const ButtonCom = ({title = "Button" , style, onClick}) => {
    return (
        <>

            <button 
            className={styles.btn} 
            style={{...style}}
            onClick= {onClick}
            >
                {title}
            </button>


        </>
    )
}

export default ButtonCom
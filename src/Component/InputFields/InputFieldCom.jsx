import styles from "./InputFieldCom.module.css"

export const InputFieldCom = ({ type = "text", placeholder, onChange, value , style}) => {
  return (
    <>

      <input className={styles.input} style={style}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

    </>
  )
}


export default InputFieldCom

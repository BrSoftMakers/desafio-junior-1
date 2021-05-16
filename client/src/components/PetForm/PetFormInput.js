import styles from "./styles.module.css";

function PetFormInput({
  label,
  name,
  placeholder,
  value,
  onChange,
  type,
  ...rest
}) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        {...rest}
      />
    </div>
  );
}

export default PetFormInput;

import styles from "./styles.module.css";

function PetFormSelect({
  label,
  name,
  placeholder,
  value,
  onChange,
  type,
  children,
  ...rest
}) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}

export default PetFormSelect;

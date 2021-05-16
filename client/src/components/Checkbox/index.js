import { FaCheck } from "react-icons/fa";

import styles from "./styles.module.css";

function Checkbox({
  value,
  onChange,
  className,
  disableKeyboardSupport = false,
  ...rest
}) {
  function handleKeyDown(ev) {
    // Prevenir possíveis erros dentro da tabela
    if (!disableKeyboardSupport) {
      if (ev.code === "Space" || ev.code === "Enter") {
        onChange();
      }
    }
  }

  return (
    <div
      className={`${styles.container} ${value ? styles.active : ""} ${
        className ? className : ""
      }`}
      tabIndex={-1}
      onClick={onChange}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {value && <FaCheck size={18} color="#F50057" />}
    </div>
  );
}

export default Checkbox;

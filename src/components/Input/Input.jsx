import styles from "./InputStyle.module.css";
import { Icon } from "@iconify/react";



const Input = ({
  type = "text",
  name,
  placeholder,
  children,
  IconPass = false,
  handleShowPass,
  showPass,
  defaultValue,
}) => {
  return (
    <div className={styles.input}>
      <span className={styles.inputIcon}>{children}</span>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={'off'}
        className={IconPass ? styles.inputPass : ""}
      />
      {IconPass && (
        <span className={styles.inputIconPass} onClick={handleShowPass}>
          {showPass ? (
            <Icon icon="iconamoon:eye" />
          ) : (
            <Icon icon="iconamoon:eye-off" />
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
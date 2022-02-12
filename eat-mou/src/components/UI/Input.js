import styles from "./Input.module.css";
const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className={`${styles.input} ${props.className}`}
    />
  );
};

export default Input;

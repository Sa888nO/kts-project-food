import classNames from "classnames";

import styles from "./Input.module.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value?: string;
  onChange: (value: string) => void;
};
const Input: React.FC<InputProps> = ({
  onChange,
  value,
  disabled,
  ...props
}) => {
  let dis = disabled !== undefined ? true : false;
  return (
    <input
      value={value}
      type="text"
      placeholder={"Search"}
      {...props}
      className={classNames(styles.input, props.className, {
        input_disabled: dis,
      })}
      disabled={dis}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};
export default Input;

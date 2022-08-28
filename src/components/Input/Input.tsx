import classNames from "classnames";
import "./Input.scss";
/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /** Значение поля */
  value?: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};
export const Input: React.FC<InputProps> = ({
  onChange,
  value,
  disabled,
  ...props
}) => {
  let dis = disabled !== undefined ? true : false;
  return (
    <input
      type="text"
      placeholder={"Search"}
      {...props}
      className={classNames("input", props.className, {
        input_disabled: dis,
      })}
      disabled={dis}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

import classNames from "classnames";
import styled from "styled-components";

const SearchInput = styled.input`
  border: 0;
  height: 60px;
  width: 100%;
  border-radius: 7px;
  background: linear-gradient(98.81deg, #fff0f0 -0.82%, #ffdfdf 101.53%);
  padding-left: 32px;
  font-size: 20px;
  outline: none;
  &:hover {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
`;

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
    <SearchInput
      value={value}
      type="text"
      placeholder={"Search"}
      {...props}
      // className={classNames(styles.input, props.className, {
      //   input_disabled: dis,
      // })}
      disabled={dis}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};
export default Input;

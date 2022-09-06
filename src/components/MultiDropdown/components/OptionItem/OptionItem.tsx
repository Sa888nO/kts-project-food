import { useState } from "react";

import { Option } from "@components/MultiDropdown/MultiDropdown";
import classNames from "classnames";

import styles from "./OptionItem.module.scss";

type OptionItemProps = {
  option: Option;
  onClick: (child: Option) => void;
};

const OptionItem: React.FC<OptionItemProps> = ({ option, onClick }) => {
  const [isClicked, setClicked] = useState(false);
  return (
    <div
      className={classNames(styles.option, { [styles.click]: isClicked })}
      key={option.key}
      onClick={() => {
        onClick(option);
        isClicked ? setClicked(false) : setClicked(true);
      }}
    >
      {option.value}
    </div>
  );
};

export default OptionItem;

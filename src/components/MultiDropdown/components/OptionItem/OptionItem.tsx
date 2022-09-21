import { useState } from "react";

import classNames from "classnames";
import { Option } from "components/MultiDropdown/MultiDropdown";

import styles from "./OptionItem.module.scss";

type OptionItemProps = {
  isClicked?: boolean;
  option: Option;
  onClick: (child: Option) => void;
};

const OptionItem: React.FC<OptionItemProps> = ({
  isClicked,
  option,
  onClick,
}) => {
  return (
    <div
      className={classNames(styles.option, { [styles.click]: isClicked })}
      key={option.key}
      onClick={() => {
        onClick(option);
      }}
    >
      {option.value}
    </div>
  );
};

export default OptionItem;

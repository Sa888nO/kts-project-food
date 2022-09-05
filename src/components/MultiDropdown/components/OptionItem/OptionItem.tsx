import { Option } from "@components/MultiDropdown/MultiDropdown";
import classNames from "classnames";

import styles from "./OptionItem.module.scss";

type OptionItemProps = {
  clicked: boolean;
  option: Option;
  onClick: (child: Option) => void;
};

const OptionItem: React.FC<OptionItemProps> = ({
  clicked,
  option,
  onClick,
}) => {
  return (
    <div
      className={classNames(styles.option, styles.clicked)}
      key={option.key}
      onClick={() => onClick(option)}
    >
      {option.value}
    </div>
  );
};

export default OptionItem;

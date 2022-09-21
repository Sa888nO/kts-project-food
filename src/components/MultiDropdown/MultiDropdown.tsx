import { useState } from "react";

import { observer } from "mobx-react-lite";
import RecipesStore from "store/RecipesStore";
import rootStore from "store/RootStore";
import { Option } from "types";

import OptionItem from "./components/OptionItem";
import { multiDropData } from "./multiDropData";
import styles from "./MultiDropdown.module.scss";

// export type Option = {
//   key: string;
//   value: string;
// };

export type MultiDropdownProps = {
  options?: Option[];
  value: Option[];
  onChange?: (value: Option[]) => void;
  disabled?: boolean;
  pluralizeOptions?: (value: Option[]) => string;
};
const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options = multiDropData,
  value,
  onChange = (item: Option[]) => {},
  pluralizeOptions = (value) => {
    if (value.length === 0) {
      return "Pick categories";
    } else {
      let stringArray: string[] = [];
      stringArray = value.map((item) => item.value);
      return stringArray.join(", ");
    }
  },
  disabled,
}) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => (isOpen ? setOpen(false) : setOpen(true));

  return (
    <div className={styles.wrap}>
      <button className={styles["multi-down"]} onClick={handleOpen}>
        {pluralizeOptions(value)}
      </button>
      <div className={styles.options}>
        {isOpen &&
          options.map((child, index) => {
            return (
              !disabled && (
                <OptionItem
                  isClicked={
                    value.filter((item) => item.key === child.key).length
                      ? true
                      : false
                  }
                  key={child.key}
                  option={child}
                  onClick={(child) => {
                    rootStore.query.setNewType(child);
                    RecipesStore.getRecipes();
                  }}
                />
              )
            );
          })}
      </div>
    </div>
  );
};

export default observer(MultiDropdown);

import { useState } from "react";

import { observer } from "mobx-react-lite";
import RecipesStore from "store/RecipesStore";
import rootStore from "store/RootStore";

import OptionItem from "./components/OptionItem";
import { multiDropData } from "./multiDropData";
import styles from "./MultiDropdown.module.scss";

/** Вариант для выбора в фильтре */
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options?: Option[];
  /** Текущие выбранные значения поля, массив может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange?: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
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

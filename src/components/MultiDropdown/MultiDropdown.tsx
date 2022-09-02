import { useState } from "react";

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
  value?: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange?: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions?: (value: Option[]) => string;
};
const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options = [
    { key: "1", value: "Мясо" },
    { key: "2", value: "Рыба" },
    { key: "3", value: "Овощи" },
    { key: "4", value: "Фрукты" },
  ],
  value = [],
  onChange = (item: Option[]) => {},
  pluralizeOptions = () => {
    return "Pick categories";
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
                <div
                  className={styles.option}
                  key={child.key}
                  onClick={() => {
                    if (value.includes(child)) {
                      onChange(value.filter((item) => item.key !== child.key));
                    } else {
                      onChange([...value, child]);
                    }
                  }}
                >
                  {child.value}
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default MultiDropdown;

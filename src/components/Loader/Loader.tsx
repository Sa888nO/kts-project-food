import classNames from "classnames";

import styles from "./Loader.module.scss";
/** Возможные значения размера лоадера */
enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

/** Пропсы, которые принимает компонент Loader */
type LoaderProps = {
  /**
   * Идет ли загрузка.
   * По умолчанию - true, для удобства использования
   * Если false, то лоадер не должен отображаться
   */
  loading?: boolean;
  /**
   * Размер лоадера. При передаче данного пропса, должен добавляться css-класс loader_size-{size}
   * По умолчанию: размер - LoaderSize.m, css-класс - loader_size-m
   */
  size?: LoaderSize;
  /**
   * Дополнительные CSS-классы.
   */
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size = LoaderSize.l,
  className,
}) => {
  return loading ? (
    <div
      className={classNames(
        styles.loader,
        styles[`loader_size-${size}`],
        className
      )}
    ></div>
  ) : (
    <></>
  );
};

export default Loader;

import classNames from "classnames";

import styles from "./Loader.module.scss";

enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
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

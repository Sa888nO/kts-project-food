import classNames from "classnames";

import { Loader } from "../Loader/Loader";

import "./WithLoader.scss";
/** Пропсы, которые принимает компонент WithLoader */
export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  children,
}) => {
  return (
    <div className={classNames("withLoader")}>
      {loading && <Loader className="load" />} {children}
    </div>
  );
};

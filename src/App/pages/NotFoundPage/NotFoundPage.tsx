import classNames from "classnames";
import { Link } from "react-router-dom";

import Hand from "./components/Hand";
import { Direction } from "./components/Hand/Hand";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <main className={classNames(styles.page, ".container")}>
      <div className={styles.body}>
        <div className={styles.text}>Такой страницы нет</div>
        <p className={styles.warningText}>404</p>
        <div className={styles.information}>
          <span className={styles.line}></span>
          <p className={styles.text}>
            <Hand direction={Direction.Right} />
            <Link to={"/"}> вернуться на главную</Link>
            <Hand direction={Direction.Left} />
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

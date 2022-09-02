import styles from "./InfoBlock.module.scss";
export type InfoBlockProps = {
  image: string;
  title: string;
  ingredients: string;
  countKcal: number;
  onClickForButton?: React.MouseEventHandler;
  id: number;
};
const InfoBlock: React.FC<InfoBlockProps> = ({
  image,
  title,
  ingredients,
  countKcal,
  onClickForButton,
  id,
}) => {
  return (
    <>
      <div className={`${styles["content"]}`}>
        <div className={`${styles["img-block"]}`}>
          <img src={image} alt="img" className={`${styles["img-block_img"]}`} />
        </div>
        <h5 className={`${styles["content_title"]}`}>{title}</h5>
        <div className={`${styles["content_ingredients"]}`}>{ingredients}</div>
      </div>
      <div className={`${styles["footer"]}`}>
        <div className={`${styles["footer_count-kcal"]}`}>{countKcal} kcal</div>
        <button
          type="button"
          className={`${styles["footer_button"]}`}
          onClick={() => onClickForButton}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#FF0000" />
            <line
              x1="11.8929"
              y1="6.75"
              x2="11.8929"
              y2="17.25"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <line
              x1="6.75"
              y1="12.1071"
              x2="17.25"
              y2="12.1071"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
export default InfoBlock;

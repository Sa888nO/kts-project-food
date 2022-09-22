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
      </div>
    </>
  );
};
export default InfoBlock;

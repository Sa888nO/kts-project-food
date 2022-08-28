import styles from "./Card.module.scss";
import InfoBlock from "./components/InfoBlock";
import { InfoBlockProps } from "./components/InfoBlock/InfoBlock";
import LikesBlock from "./components/LikesBlock";
import { LikesBlockProps } from "./components/LikesBlock/LikesBlock";
/** Пропсы, которые принимает компонент Card */
type CardProps = LikesBlockProps &
  InfoBlockProps & {
    id: number;
    onClick: React.MouseEventHandler;
  };

const Card: React.FC<CardProps> = ({
  likesCount,
  image,
  title,
  ingredients,
  countKcal,
  onClickForButton,
  id,
  onClick,
}) => {
  return (
    <div
      className={`${styles.card}`}
      onClick={() => {
        console.log("click " + id);
      }}
    >
      <LikesBlock likesCount={likesCount} />
      <InfoBlock
        image={image}
        ingredients={ingredients}
        title={title}
        countKcal={countKcal}
        onClickForButton={() => {}}
        id={id}
      />
    </div>
  );
};

export default Card;

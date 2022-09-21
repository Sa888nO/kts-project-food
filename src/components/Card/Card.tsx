import styles from "./Card.module.scss";
import InfoBlock from "./components/InfoBlock";
import { InfoBlockProps } from "./components/InfoBlock/InfoBlock";
import LikesBlock from "./components/LikesBlock";
import { LikesBlockProps } from "./components/LikesBlock/LikesBlock";
type CardProps = LikesBlockProps &
  InfoBlockProps & {
    id: number;
  };

const Card: React.FC<CardProps> = ({
  likesCount,
  image,
  title,
  ingredients,
  countKcal,
  onClickForButton,
  id,
}) => {
  return (
    <div className={`${styles.card}`}>
      <LikesBlock likesCount={likesCount} />
      <InfoBlock
        image={image}
        ingredients={ingredients}
        title={title}
        countKcal={countKcal}
        onClickForButton={() => {
          // eslint-disable-next-line no-console
          console.log("click");
        }}
        id={id}
      />
    </div>
  );
};

export default Card;

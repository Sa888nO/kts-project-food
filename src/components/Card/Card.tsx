import "./Card.scss";
import InfoBlock from "./components/InfoBlock";
import LikesBlock from "./components/LikesBlock";
/** Пропсы, которые принимает компонент Card */
type CardProps = {
  /** URL изображения */
  image?: string;
  /** Заголовок карточки */
  title?: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle?: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <LikesBlock likesCount={150} />
      <InfoBlock
        image="https://spoonacular.com/recipeImages/715497-312x231.jpg"
        ingredients="chicken + tomato + cheese Lettuce"
        title="Berry Banana Breakfast Smoothie"
        countKcal={440}
      />
    </div>
  );
};

export default Card;

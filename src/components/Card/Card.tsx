import "./Card.scss";
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

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card_stars-rating">
        <svg
          width="16"
          height="16"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"
            fill="#FF9F06"
          />
        </svg>
        <span className="card_rating">3.8</span>
      </div>
      <div className="content-block">
        <div className="img-block">
          <img src={"./pngfind1.png"} alt="img" />
        </div>
        <h5 className="card_title">Chicken burger</h5>
        <div className="card_ing">100 gr chicken + tomato + cheese Lettuce</div>
        <div className="card_footer">
          <div className="card_footer-text">300 kcal</div>
          <div className="card_footer-button"></div>
        </div>
      </div>
    </div>
  );
};
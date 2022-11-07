import styled from "styled-components";

import InfoBlock from "./components/InfoBlock";
import { InfoBlockProps } from "./components/InfoBlock/InfoBlock";
import LikesBlock from "./components/LikesBlock";
import { LikesBlockProps } from "./components/LikesBlock/LikesBlock";

const RecipeCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  padding: 8px 12px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 2.5px 2.5px rgba(0, 0, 0, 0.22);
  }
`;

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
    <RecipeCard>
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
    </RecipeCard>
  );
};

export default Card;

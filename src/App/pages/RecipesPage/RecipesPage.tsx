import background from "@assets/images/BACKGROUND2.png";
import Card from "@components/Card";
import Input from "@components/Input";
import Loader from "@components/Loader";
import MultiDropdown from "@components/MultiDropdown";
import RecipesStore from "@store/RecipesStore";
import rootStore from "@store/RootStore/instance";
import { observer } from "mobx-react-lite";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

import styles from "./RecipesPage.module.scss";

const RecipesPage = () => {
  if (RecipesStore.recipesList.length === 0) {
    RecipesStore.getRecipes();
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={background} alt="" className={styles.img} />
        <div className={styles["search-block"]}>
          <Input
            value={rootStore.query.getSearch()}
            onChange={(value) => {
              rootStore.query.setSearch(value);
              RecipesStore.getRecipes();
            }}
          />
          <MultiDropdown value={rootStore.query.getOption()} />
        </div>

        {RecipesStore.recipesList ? (
          <InfiniteScroll
            dataLength={RecipesStore.recipesList.length}
            next={() => {
              rootStore.query.moreItems();
              RecipesStore.getRecipes();
            }}
            hasMore={true}
            className={styles.scroll}
            loader={<Loader className={styles.center} />}
          >
            <div className={styles.recipes}>
              {RecipesStore.recipesList.map((recipe) => (
                <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                  <Card
                    likesCount={recipe.likesCount}
                    image={recipe.image}
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    countKcal={recipe.countKcal}
                    onClickForButton={() => {}}
                    id={recipe.id}
                  />
                </Link>
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <Loader className={styles.center} />
        )}
      </div>
    </div>
  );
};

export default observer(RecipesPage);

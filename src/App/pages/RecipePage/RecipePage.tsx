import { useEffect } from "react";

import Loader from "@components/Loader";
import RecipeStore from "@store/RecipeStore";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";

import RatingBlockElement from "./components/RatingBlockElement";
import { SvgType } from "./components/RatingBlockElement/RatingBlockElement";
import styles from "./RecipePage.module.scss";

const RecipePage = () => {
  const { id } = useParams();
  useEffect(() => {
    RecipeStore.getRecipe(id);
    return () => {
      RecipeStore.clear();
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      {RecipeStore.recipe ? (
        <div className={styles.recipe}>
          <div className={styles["image-block"]}>
            <img src={RecipeStore.recipe.image} alt="f" width={375} />
            <Link to="/" className={styles["link-back"]}></Link>
          </div>
          <div className={styles["recipe_title"]}>
            {RecipeStore.recipe.title}
          </div>
          <div className={styles["rating-block"]}>
            <RatingBlockElement
              type={SvgType.like}
              number={RecipeStore.recipe.aggregateLikes}
            />
            <RatingBlockElement
              type={SvgType.heart}
              number={RecipeStore.recipe.aggregateLikes}
            />
          </div>
          <div className={styles["recipe_info"]}>
            <div
              dangerouslySetInnerHTML={{ __html: RecipeStore.recipe.content }}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default observer(RecipePage);

import { useEffect, useState } from "react";
import React from "react";

import Loader from "@components/Loader";
import { API_ENDPOINTS, KEYS } from "@configs/api";
import RecipeStore from "@store/RecipeStore";
import axios from "axios";
import { observable, observe } from "mobx";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { Recipe } from "src/types/recipe";

import RatingBlockElement from "./components/RatingBlockElement";
import { SvgType } from "./components/RatingBlockElement/RatingBlockElement";
import styles from "./RecipePage.module.scss";

const RecipePage = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  useEffect(() => {
    RecipeStore.getRecipe(id);
  }, []);
  return (
    <div className={styles.wrapper}>
      {RecipeStore.recipe ? (
        <div className={styles.recipe}>
          <div className={styles["image-block"]}>
            <img src={RecipeStore.recipe.image} alt="f" width={375} />
            <Link to="/" className={styles["link-back"]}></Link>
          </div>
          <div className={styles["recipe_title"]}>{recipe?.title}</div>
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

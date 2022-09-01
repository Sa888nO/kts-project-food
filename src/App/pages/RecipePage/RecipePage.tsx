import { useEffect, useState } from "react";
import React from "react";

import Loader from "@components/Loader";
import { API_ENDPOINTS, KEYS, OPTIONS } from "@configs/api";
import axios from "axios";
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
    const getRecipe = async () => {
      const result = await axios({
        method: "get",
        url: `${API_ENDPOINTS.RECIPE}${id}/information?${KEYS.key1}&${OPTIONS.fullInfoForRecipe}`,
      });
      setRecipe({
        content: result.data.summary,
        title: result.data.title,
        healthScore: result.data.healthScore,
        aggregateLikes: result.data.aggregateLikes,
        image: result.data.image,
      });
      setLoading(false);
    };
    getRecipe();
  }, []);
  return (
    <div className={styles.wrapper}>
      {!isLoading && recipe !== undefined ? (
        <div className={styles.recipe}>
          <div className={styles["image-block"]}>
            <img src={recipe.image} alt="f" width={375} />
            <Link to="/" className={styles["link-back"]}></Link>
          </div>
          <div className={styles["recipe_title"]}>{recipe?.title}</div>
          <div className={styles["rating-block"]}>
            <RatingBlockElement
              type={SvgType.like}
              number={recipe.aggregateLikes}
            />
            <RatingBlockElement
              type={SvgType.heart}
              number={recipe.aggregateLikes}
            />
          </div>
          <div className={styles["recipe_info"]}>
            <div dangerouslySetInnerHTML={{ __html: recipe.content }} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default RecipePage;

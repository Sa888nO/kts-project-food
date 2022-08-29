import { useEffect, useState } from "react";
import React from "react";

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Recipe } from "src/types/recipe";

import styles from "./RecipePage.module.scss";

const RecipePage = () => {
  const [Recipe, setRecipe] = useState<Recipe>();
  const { id } = useParams();
  useEffect(() => {
    const getRecipe = async () => {
      const result = await axios({
        method: "get",
        url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=335c63bdf50f48feacc1f7d817e6608c&includeNutrition=true`,
        // ${API_ENDPOINTS.RECIPSE}?${KEYS.key1}&${OPTIONS.fullInfo}
      });
      setRecipe({
        content: result.data.summary,
        title: result.data.title,
        healthScore: result.data.healthScore,
        aggregateLikes: result.data.aggregateLikes,
        image: result.data.image,
      });
    };
    getRecipe();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.recipe}>
        <div className={styles["image-block"]}>
          <img src={Recipe?.image} alt="f" width={375} />
          <Link to="/" className={styles["link-back"]}></Link>
        </div>
        <div className={styles["recipe_title"]}>{Recipe?.title}</div>
        <div className={styles["rating-block"]}>
          <div className={styles["rating-block_element"]}>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 66 66"
              className="enable-background:new 0 0 66 66;"
              xmlSpace="preserve"
              fill="orange"
            >
              <path
                d="M51.735,20h-2.934c1.419-3.934,2.799-9.714,0.942-14.247c-1.095-2.673-3.177-4.574-6.021-5.496
C43.197,0.086,42.651,0,42.101,0c-3.701,0-7.05,3.613-11.944,12.888c-2.199,4.171-5.364,7.683-7.593,9.577
c-0.946,0.804-1.702,1.624-2.315,2.431c-1.69-2.512-4.558-4.167-7.806-4.167c-5.185,0-9.404,4.219-9.404,9.404v27.294
c0,5.186,4.219,9.404,9.404,9.404c3.406,0,6.386-1.827,8.036-4.546c2.212,2.728,5.586,4.477,9.364,4.477h23.023
c9.507,0,10.926-6.136,10.926-9.793v-24.91C63.793,25.41,58.384,20,51.735,20z M15.847,57.427c0,1.877-1.527,3.404-3.403,3.404
c-1.877,0-3.404-1.527-3.404-3.404V30.133c0-1.877,1.527-3.404,3.404-3.404c1.876,0,3.403,1.527,3.403,3.404V57.427z
M57.793,56.969c0,2.221-0.354,3.793-4.926,3.793H29.844c-3.34,0-6.058-2.717-6.058-6.057V32.059l0.008-0.095l-0.021-0.176
c-0.006-0.096-0.106-2.386,2.676-4.75c2.656-2.258,6.419-6.425,9.015-11.351c4.132-7.83,6.104-9.353,6.639-9.641
c1.039,0.388,1.688,1.007,2.087,1.981c1.293,3.156-0.331,9.224-2.603,13.587l-2.283,4.385h12.43c3.341,0,6.059,2.718,6.059,6.059
V56.969z"
              />
            </svg>
            <span>{Recipe?.aggregateLikes}</span>
          </div>
          <div className={styles["rating-block_element"]}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8609 2.07455C13.5204 1.73389 13.1161 1.46365 12.6711 1.27927C12.2261 1.0949 11.7492 1 11.2675 1C10.7859 1 10.3089 1.0949 9.86396 1.27927C9.41898 1.46365 9.0147 1.73389 8.67419 2.07455L7.96753 2.78122L7.26086 2.07455C6.57307 1.38676 5.64022 1.00036 4.66753 1.00036C3.69484 1.00036 2.76199 1.38676 2.07419 2.07455C1.3864 2.76235 1 3.69519 1 4.66788C1 5.64057 1.3864 6.57342 2.07419 7.26122L2.78086 7.96788L7.96753 13.1545L13.1542 7.96788L13.8609 7.26122C14.2015 6.92071 14.4718 6.51643 14.6561 6.07145C14.8405 5.62648 14.9354 5.14954 14.9354 4.66788C14.9354 4.18622 14.8405 3.70929 14.6561 3.26431C14.4718 2.81934 14.2015 2.41505 13.8609 2.07455Z"
                fill="#FF0000"
                stroke="#FF0000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{Recipe?.healthScore}</span>
          </div>
        </div>
        <div className={styles["recipe_info"]}>
          {Recipe?.content !== undefined && (
            <div dangerouslySetInnerHTML={{ __html: Recipe?.content }} />
          )}
        </div>
      </div>
    </div>
  );
};
// https://api.spoonacular.com/recipes/715594/information?apiKey=674493274ad544d1b8cb5551c56d594f

export default RecipePage;
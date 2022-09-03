import { useEffect, useState } from "react";

import background from "@assets/images/BACKGROUND2.png";
import Card from "@components/Card";
import Input from "@components/Input";
import Loader from "@components/Loader";
import MultiDropdown from "@components/MultiDropdown";
import { API_ENDPOINTS, KEYS } from "@configs/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { Recipes } from "src/types/recipes";

import styles from "./RecipesPage.module.scss";

const RecipesPage = () => {
  const [Recipes, setRecipes] = useState<Recipes[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipes = async () => {
      const result = await axios({
        method: "get",
        url: API_ENDPOINTS.RECIPSE,
        params: { apiKey: KEYS.key1, addRecipeNutrition: true },
      });
      setRecipes(
        result.data.results.map((recipe: any) => {
          let ingredientsArray: string[] = [];
          recipe.nutrition.ingredients.map((item: { name: string }): void => {
            ingredientsArray.push(item.name);
          });
          let ingredients: string = ingredientsArray.join(" ");
          return {
            likesCount: recipe.aggregateLikes,
            image: recipe.image,
            title: recipe.title,
            ingredients: ingredients,
            countKcal: recipe.nutrition.nutrients[0].amount,
            id: recipe.id,
          };
        })
      );
      setLoading(false);
    };
    getRecipes();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={background} alt="" className={styles.img} />
        <div className={styles["search-block"]}>
          <Input onChange={() => {}} />
          <MultiDropdown />
        </div>

        {!isLoading ? (
          <div className={styles.recipes}>
            {Recipes.map((recipe) => (
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
        ) : (
          <Loader className={styles.center} />
        )}
      </div>
    </div>
  );
};

export default RecipesPage;

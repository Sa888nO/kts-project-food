import { useEffect, useState } from "react";

import Card from "@components/Card";
import { Input } from "@components/Input/Input";
import { MultiDropdown } from "@components/MultiDropdown/MultiDropdown";
import axios from "axios";
import { Recipes } from "src/types/recipes";

import styles from "./RecipesPage.module.scss";

const RecipesPage = () => {
  const [Recipes, setRecipes] = useState<Recipes[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: "",
        // https://api.spoonacular.com/recipes/complexSearch?apiKey=674493274ad544d1b8cb5551c56d594f&addRecipeNutrition=true
      });
      setRecipes(
        result.data.results.map((recipe: any) => {
          let ingredientsArray: string[] = [];
          recipe.nutrition.ingredients.map((item: { name: string }) => {
            ingredientsArray.push(item.name);
          });
          let ingredients: string = ingredientsArray.join(" ");
          let i = {
            likesCount: recipe.aggregateLikes,
            image: recipe.image,
            title: recipe.title,
            ingredients: ingredients,
            countKcal: recipe.nutrition.nutrients[0].amount,
            id: recipe.id,
          };
          console.log(i);
          return i;
        })
      );
    };
    console.log("useEff");
    fetch();
  }, []);
  console.log("L" + Recipes);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img
          src="./images/BACKGROUND2.png"
          alt=""
          className={`${styles.img}`}
        />
        <div className={styles["search-block"]}>
          <Input onChange={() => {}} />
          <MultiDropdown />
        </div>

        <div className={styles.recipes}>
          {Recipes.map((recipe) => (
            <Card
              likesCount={recipe.likesCount}
              image={recipe.image}
              title={recipe.title}
              ingredients={recipe.ingredients}
              countKcal={recipe.countKcal}
              onClickForButton={(id) => {
                console.log(id);
              }}
              id={recipe.id}
              onClick={(title) => {
                console.log("click " + title);
              }}
            />
          ))}
          <Card
            likesCount={1}
            image="./pngfind1.png"
            title="Burger1"
            ingredients="1 2 3"
            countKcal={200}
            onClickForButton={(id) => {
              console.log(id);
            }}
            id={1}
            onClick={(title) => {
              console.log("click " + title);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;

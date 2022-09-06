import { Recipes } from "@store/models/recipes";

export const parseRecipesData = (responseData: Recipes[]): Recipes[] => {
  const arrayRecipes: Recipes[] = [];
  responseData.map((recipe: any) => {
    let ingredientsArray: string[] = [];
    recipe.nutrition.ingredients.map((item: { name: string }): void => {
      ingredientsArray.push(item.name);
    });
    let ingredients: string = ingredientsArray.join(" ");
    arrayRecipes.push({
      likesCount: recipe.aggregateLikes,
      image: recipe.image,
      title: recipe.title,
      ingredients: ingredients,
      countKcal: recipe.nutrition.nutrients[0].amount,
      id: recipe.id,
    });
  });
  return arrayRecipes;
};

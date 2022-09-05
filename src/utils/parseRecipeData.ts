import { Recipe } from "src/types/recipe";

export const parseRecipeData = (responseData: any): Recipe => {
  return {
    content: responseData.summary,
    title: responseData.title,
    healthScore: responseData.healthScore,
    aggregateLikes: responseData.aggregateLikes,
    image: responseData.image,
  };
};

import { Recipe } from "src/types/recipe";

export const parseRecipeData = (responseData: any): Recipe => {
  // eslint-disable-next-line no-console
  console.log(responseData);
  return {
    content: responseData.summary,
    title: responseData.title,
    healthScore: responseData.healthScore,
    aggregateLikes: responseData.aggregateLikes,
    image: responseData.image,
  };
};

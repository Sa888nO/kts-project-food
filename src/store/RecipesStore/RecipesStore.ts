import axios from "axios";
import { API_ENDPOINTS, CURRENT_KEY } from "configs/api";
import { makeAutoObservable, runInAction } from "mobx";
import { Recipes } from "store/models/recipes";
import rootStore from "store/RootStore/instance";

class RecipesStore {
  private _recipesList: Recipes[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get recipesList(): Recipes[] {
    return this._recipesList;
  }

  async getRecipes(): Promise<void> {
    const result = await axios({
      method: "get",
      url: API_ENDPOINTS.RECIPSE,
      params: {
        apiKey: CURRENT_KEY,
        addRecipeNutrition: true,
        number: rootStore.query.getRecipeItems(),
        query: rootStore.query.getSearch(),
        type: rootStore.query.getOptionForQuery(),
      },
    });

    runInAction(() => {
      this._recipesList = [];
      this._recipesList = RecipesStore.parseData(result.data.results);
    });
  }
  static parseData(responseData: Recipes[]): Recipes[] {
    const arrayRecipes: Recipes[] = [];
    responseData.forEach((recipe: any) => {
      let ingredientsArray: string[] = [];
      recipe.nutrition.ingredients.forEach((item: { name: string }): void => {
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
  }
}

export default new RecipesStore();

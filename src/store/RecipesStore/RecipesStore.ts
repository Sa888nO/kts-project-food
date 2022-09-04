import { API_ENDPOINTS, KEYS } from "@configs/api";
import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { Recipes } from "src/types/recipes";

class RecipesStore {
  private _recipesList: Recipes[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get recipesList(): Recipes[] {
    return this._recipesList;
  }
  clearRecipesList() {
    this._recipesList = [];
  }

  async getRecipes(): Promise<void> {
    const result = await axios({
      method: "get",
      url: API_ENDPOINTS.RECIPSE,
      params: { apiKey: KEYS.key5, addRecipeNutrition: true },
    });
    if (result.data.results.length !== 0) {
      runInAction(() => {
        this.clearRecipesList();
        result.data.results.map((recipe: any) => {
          let ingredientsArray: string[] = [];
          recipe.nutrition.ingredients.map((item: { name: string }): void => {
            ingredientsArray.push(item.name);
          });
          let ingredients: string = ingredientsArray.join(" ");
          this._recipesList.push({
            likesCount: recipe.aggregateLikes,
            image: recipe.image,
            title: recipe.title,
            ingredients: ingredients,
            countKcal: recipe.nutrition.nutrients[0].amount,
            id: recipe.id,
          });
        });
      });
    }
  }

  destroy(): void {}
}

export default new RecipesStore();

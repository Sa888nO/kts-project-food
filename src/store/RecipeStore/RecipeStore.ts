import { API_ENDPOINTS, KEYS } from "@configs/api";
import { parseRecipeData } from "@utils/parseRecipeData";
import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { Recipe } from "src/types/recipe";

class RecipeStore {
  private _recipe: Recipe = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  get recipe(): Recipe {
    return this._recipe;
  }

  async getRecipe(id: string | undefined): Promise<void> {
    const result = await axios({
      method: "get",
      url: `${API_ENDPOINTS.RECIPE}${id}/information`,
      params: {
        apiKey: KEYS.key4,
        includeNutrition: true,
      },
    });
    if (result.data) {
      runInAction(() => {
        this._recipe = parseRecipeData(result.data);
      });
    }
  }

  destroy(): void {}
}

export default new RecipeStore();

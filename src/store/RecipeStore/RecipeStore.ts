import { API_ENDPOINTS, CURRENT_KEY } from "@configs/api";
import { Recipe } from "@store/models/recipe";
import { parseRecipeData } from "@utils/parseRecipeData";
import axios from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

type PrivateFields = "_recipe";

class RecipeStore {
  private _recipe: Recipe = undefined;

  constructor() {
    makeObservable<RecipeStore, PrivateFields>(this, {
      _recipe: observable,
      getRecipe: action,
      recipe: computed,
      clear: action,
    });
  }

  get recipe(): Recipe {
    return this._recipe;
  }

  clear(): void {
    this._recipe = undefined;
  }

  async getRecipe(id: string | undefined): Promise<void> {
    const result = await axios({
      method: "get",
      url: `${API_ENDPOINTS.RECIPE}${id}/information`,
      params: {
        apiKey: CURRENT_KEY,
        includeNutrition: true,
      },
    });
    if (result.data) {
      runInAction(() => {
        this._recipe = parseRecipeData(result.data);
      });
    }
  }
}

export default new RecipeStore();

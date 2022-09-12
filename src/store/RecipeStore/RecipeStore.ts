import axios from "axios";
import { API_ENDPOINTS, CURRENT_KEY } from "configs/api";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { Recipe } from "store/models/recipe";

type PrivateFields = "_recipe";

class RecipeStore {
  private _recipe: Recipe = null;

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
    this._recipe = null;
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
        this._recipe = RecipeStore.parseData(result.data);
      });
    }
  }
  static parseData(responseData: any): Recipe {
    return {
      content: responseData.summary,
      title: responseData.title,
      healthScore: responseData.healthScore,
      aggregateLikes: responseData.aggregateLikes,
      image: responseData.image,
    };
  }
}

export default new RecipeStore();

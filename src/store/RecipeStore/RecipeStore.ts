import axios from "axios";
import { API_ENDPOINTS, CURRENT_KEY } from "configs/api";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { Recipe, RecipeAPI } from "store/models/recipe";

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
  static parseData(recipe: RecipeAPI): Recipe {
    let ingredientsArray: string[] = [];
    recipe.nutrition.ingredients.forEach((item: { name: string }): void => {
      ingredientsArray.push(item.name);
    });
    return {
      content: recipe.summary,
      title: recipe.title,
      healthScore: recipe.healthScore,
      aggregateLikes: recipe.aggregateLikes,
      image: recipe.image,
      ingredients: ingredientsArray,
    };
  }
}

export default new RecipeStore();

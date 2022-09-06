import { API_ENDPOINTS, CURRENT_KEY } from "@configs/api";
import { Recipes } from "@store/models/recipes";
import rootStore from "@store/RootStore/instance";
import { parseRecipesData } from "@utils/parseRecipesData";
import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

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
      this._recipesList = parseRecipesData(result.data.results);
    });
  }
}

export default new RecipesStore();

import { API_ENDPOINTS, CURRENT_KEY } from "@configs/api";
import rootStore from "@store/RootStore/instance";
import { parseRecipesData } from "@utils/parseRecipesData";
import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { Recipes } from "src/types/recipes";

class RecipesStore {
  private _recipesList: Recipes[] = [];

  constructor() {
    // eslint-disable-next-line no-console
    console.log("CREATRS");
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

import { API_ENDPOINTS, CURRENT_KEY } from "@configs/api";
import rootStore from "@store/RootStore/instance";
import { parseRecipesData } from "@utils/parseRecipesData";
import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { Recipes } from "src/types/recipes";

class RecipesStore {
  private _recipesList: Recipes[] = [];
  private _isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  get recipesList(): Recipes[] {
    return this._recipesList;
  }
  isLoading(): boolean {
    return this._isLoading;
  }

  async getRecipes(): Promise<void> {
    this._isLoading = true;
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
      this._isLoading = false;
      // eslint-disable-next-line no-console
      console.log(this._recipesList);
    });
  }
}

export default new RecipesStore();

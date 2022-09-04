import { API_ENDPOINTS, KEYS } from "@configs/api";
import { parseRecipesData } from "@utils/parseRecipesData";
import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { Recipes } from "src/types/recipes";

class RecipesStore {
  private _recipesList: Recipes[] = [];
  private _items: number = 6;
  private _hasMore: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  get recipesList(): Recipes[] {
    return this._recipesList;
  }
  get hasMore(): boolean {
    return this._hasMore;
  }

  moreRecipes() {
    this._items += 10;
    this.getRecipes();
    if (this._items >= 12) {
      this._hasMore = false;
    }
  }

  async getRecipes(): Promise<void> {
    const result = await axios({
      method: "get",
      url: API_ENDPOINTS.RECIPSE,
      params: {
        apiKey: KEYS.key4,
        addRecipeNutrition: true,
        number: this._items,
      },
    });
    if (result.data.results.length !== 0) {
      runInAction(() => {
        this._recipesList = [];
        this._recipesList = parseRecipesData(result.data.results);
      });
    }
  }

  destroy(): void {}
}

export default new RecipesStore();

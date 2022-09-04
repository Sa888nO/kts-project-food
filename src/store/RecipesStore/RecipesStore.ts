import { API_ENDPOINTS, CURRENT_KEY } from "@configs/api";
import { parseRecipesData } from "@utils/parseRecipesData";
import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { Recipes } from "src/types/recipes";

class RecipesStore {
  private _recipesList: Recipes[] = [];
  private _items: number = 6;
  private _hasMore: boolean = true;
  private _search: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  get recipesList(): Recipes[] {
    return this._recipesList;
  }
  get hasMore(): boolean {
    return this._hasMore;
  }

  updateSearch(value: string) {
    this._search = value;
    // this.getRecipes();
  }

  moreRecipes() {
    this._items += 10;
    this.getRecipes();
    if (this._items >= 50) {
      this._hasMore = false;
    }
  }

  async getRecipes(): Promise<void> {
    const result = await axios({
      method: "get",
      url: API_ENDPOINTS.RECIPSE,
      params: {
        apiKey: CURRENT_KEY,
        addRecipeNutrition: true,
        number: this._items,
        query: this._search,
      },
    });
    if (result.data.results.length !== 0) {
      runInAction(() => {
        this._recipesList = [];
        this._recipesList = parseRecipesData(result.data.results);
      });
    }
  }
}

export default new RecipesStore();

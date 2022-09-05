import { Option } from "@components/MultiDropdown/MultiDropdown";
import {
  action,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

type PrivateFields = "_params";

class QueryParamsStore {
  // type: Option[]
  private _params: { search: string; recipeItems: number } = {
    search: "",
    recipeItems: 10,
    // type: [],
  };

  constructor() {
    // makeAutoObservable(this);
    makeObservable<QueryParamsStore, PrivateFields>(this, {
      _params: observable,
      setSearch: action,
      moreItems: action,
    });
  }

  getSearch(): string {
    return this._params.search;
  }
  getRecipeItems(): number {
    return this._params.recipeItems;
  }

  setSearch(search: string) {
    runInAction(() => {
      this._params.search = search;
    });
  }
  moreItems() {
    runInAction(() => {
      this._params.recipeItems += 10;
    });
  }
}

export default QueryParamsStore;

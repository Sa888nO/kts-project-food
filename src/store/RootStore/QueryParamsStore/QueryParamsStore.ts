import { action, makeObservable, observable, runInAction } from "mobx";
import { Option } from "types";

type PrivateFields = "_params";

class QueryParamsStore {
  private _params: {
    search: string;
    recipeItems: number;
    options: Option[];
  } = {
    search: "",
    recipeItems: 10,
    options: [],
  };

  constructor() {
    makeObservable<QueryParamsStore, PrivateFields>(this, {
      _params: observable,
      setSearch: action,
      moreItems: action,
      setNewType: action,
    });
  }

  getSearch(): string {
    return this._params.search;
  }
  getRecipeItems(): number {
    return this._params.recipeItems;
  }
  getOption(): Option[] {
    return this._params.options;
  }
  getOptionForQuery(): string {
    let queryString: string[];
    queryString = this._params.options.map((op) => op.value);
    return queryString.join(", ");
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
  setNewType(option: Option) {
    runInAction(() => {
      if (
        this._params.options.filter((op) => op.key === option.key).length !== 0
      ) {
        this._params.options = this._params.options.filter(
          (item) => item.key !== option.key
        );
      } else {
        this._params.options = [...this._params.options, option];
      }
    });
  }
}

export default QueryParamsStore;

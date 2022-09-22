import { action, keys, makeObservable, observable, runInAction } from "mobx";
import { Option } from "types";

type PrivateFields = "_params";

class QueryParamsStore {
  private _params: {
    search: string;
    recipeItems: number;
    options: Option[];
  } = {
    search: localStorage.getItem("search") ?? "",
    recipeItems: 10,
    options: this.getLocalOptions() ?? [],
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
  getLocalOptions() {
    let localop = localStorage.getItem("options") ?? "";
    let localOptions: Option[] = JSON.parse(localop).map(
      (item: Option) => item
    );
    return localOptions;
  }
  setSearch(search: string) {
    runInAction(() => {
      this._params.search = search;
      localStorage.setItem("search", search);
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
      localStorage.setItem("options", JSON.stringify(this._params.options));
    });
  }
}

export default QueryParamsStore;

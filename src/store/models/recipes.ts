export type Recipes = {
  likesCount: number;
  image: string;
  title: string;
  ingredients: string;
  countKcal: number;
  id: number;
};

export type RecipesAPI = {
  aggregateLikes: number;
  image: string;
  title: string;
  ingredients: string;
  countKcal: number;
  id: number;
  nutrition: {
    nutrients: [
      {
        amount: number;
      }
    ];
    ingredients: [
      {
        name: string;
      }
    ];
  };
};

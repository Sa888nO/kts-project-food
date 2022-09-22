export type Recipe = {
  content: string;
  title: string;
  healthScore: number;
  aggregateLikes: number;
  image: string;
  ingredients: string[];
} | null;

export type RecipeAPI = {
  summary: string;
  title: string;
  healthScore: number;
  aggregateLikes: number;
  image: string;
  nutrition: {
    ingredients: [
      {
        name: string;
      }
    ];
  };
};

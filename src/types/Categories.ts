export type CategoriesTypes = {
  id: number;
  name: string;
  color: string;
};
export type CategoriesSliceTypes = {
  loading: boolean;
  error: string;
  categories: CategoriesTypes[];
};

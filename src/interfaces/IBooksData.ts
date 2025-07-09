import type { IBookRecommendation } from "./IBookRecommendation";
import type ICategories from "./ICategories";

export interface IBooksData {
  books: ICategories[];
  recommendations?: IBookRecommendation[];
}

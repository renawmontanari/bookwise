export default interface ICategories {
  id: number;
  title: string;
  image: string;
  genre: string;
  country: string;
  author: string;
  year: number;
  pages: number;
  themes: string[];
  rating?: number;
  available_on: string[];
  language: string;
}

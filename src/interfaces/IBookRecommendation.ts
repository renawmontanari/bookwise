export interface IBookRecommendation {
  book_id: number;
  suggestions: number[]; // Array of book IDs
  reason: string;
}

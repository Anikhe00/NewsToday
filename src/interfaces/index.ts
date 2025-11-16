export interface Article {
  id: string;
  title: string;
  description: string | null;
  imgUrl: string | null;
  category: string[];
  pubDate: string;
  sourceName: string;
  author: string | null;
  link: string;
}

export interface ApiResponse {
  status: string;
  totalResults: number;
  results: Article[];
}

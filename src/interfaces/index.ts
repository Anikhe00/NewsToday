export interface Article {
  article_id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  category: string[];
  pubDate: string;
  source_name: string;
  creator: string[];
  link: string;
}

export interface ApiResponse {
  status: string;
  totalResults: number;
  results: Article[];
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: string;
  authorId: string;
}

export interface Quote {
  quote: string;
  author: string;
  category: string;
}

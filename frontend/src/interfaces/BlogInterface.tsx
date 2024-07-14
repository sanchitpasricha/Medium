export interface Author {
  name: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: Author;
  authorId: string;
}

export interface Quote {
  quote: string;
  author: string;
  category: string;
}

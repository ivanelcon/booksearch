
export type BookType = {
  id: string
  title: string
  authors: Array<string> | undefined
  categories: Array<string> | undefined
  thumbnail: string | undefined
}

export type SortType = 'relevance' | 'newest'
export type CategoryType = 'all'| 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'
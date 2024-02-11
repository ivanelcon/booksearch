import {createAsyncThunk} from "@reduxjs/toolkit"
import {BookType} from "../../types"
import {getGoogleBooksURL} from "../../googleapis"

export type PayloadType = {
  add: boolean
  totalItems: number,
  books: BookType[]
}

export type ArgsType = {
  add: boolean
  queryParameters: {
    q: string
    startIndex: string
    maxResults: string
    orderBy: 'relevance' | 'newest'
  }
}

export default createAsyncThunk(
  'books/fetch',
  async (args: ArgsType) => {
    const {add, queryParameters} = args
    const queryParams = new URLSearchParams(queryParameters).toString() // {a: 1, b: 2} => a=1&b=2
    const response = await fetch(getGoogleBooksURL(queryParams))
    const data = await response.json()
    
    if (data.error) throw data.error
    if (data.totalItems === 0) throw 'по запросу ничего не найдено'

    return {
      add,
      totalItems: data.totalItems,
      books: data.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        categories: item.volumeInfo.categories,
        thumbnail: item.volumeInfo.imageLinks?.thumbnail
      }))
    }
  }
)
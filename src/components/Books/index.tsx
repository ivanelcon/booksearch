import './Books.scss'
import {FunctionComponent, memo, useEffect, useRef, useState} from "react"
import {useSelector, useDispatch} from "../../redux/config"
import {SortType, CategoryType, BookType} from '../../types'
import fetchBooksThunk from "../../redux/thunks/fetchBooksThunk"
import Book from "../Book"
import Button from '@mui/material/Button'
import Spinner from '../Spinner'

const CustomSpinner = () => <Spinner text='Загружаем ' size={15} />

const createQueryParameters = (
  q: string,
  orderBy: SortType,
  startIndex: string,
  maxResults: string = '30'
) => {
  return {q, orderBy, startIndex, maxResults}
}

interface BooksListProperties {
  category: CategoryType
  books: BookType[]
}

const BooksList = memo<BooksListProperties>(props => {
  let {category, books} = props
  const isCategorySpecific = category !== 'all'
  const categoryPrepared = category[0].toUpperCase() + category.slice(1)
  let booksJSXElements: JSX.Element[] = []
  if (isCategorySpecific) {
    books = books.filter(book => book.categories && book.categories.includes(categoryPrepared))
  }
  booksJSXElements = books.map((item, index) => {
    return <Book key={index}
      id={item.id}
      title={item.title}
      authors={item.authors}
      categories={item.categories}
      thumbnail={item.thumbnail} />
  })
  return <>
    <div className='books__found-in-cat'>{`В категории ${category}: ` + books.length}</div>
    <div className='books__list'>{booksJSXElements}</div>
  </>
})

const Books: FunctionComponent = () => {
  const mounted = useRef<boolean>(false)
  const dispatch = useDispatch()
  const search = useSelector(state => state.filterbox.search)
  const sort = useSelector(state => state.filterbox.sort)
  const category = useSelector(state => state.filterbox.category)
  const {books, pending, totalItems, error} = useSelector(state => state.books)
  
  const isNextBooksButtonVisible = category === 'all'

  const fetchNextBooks = () => {
    dispatch(fetchBooksThunk({add: true, queryParameters: createQueryParameters(search, sort, String(books.length))}))
  }

  const fetchBooks = () => {
    if (mounted.current) {
      dispatch(fetchBooksThunk({add: false, queryParameters: createQueryParameters(search, sort, '0')}))
    }
    else {
      mounted.current = true
    }
  }
  useEffect(fetchBooks, [search, sort])

  if (error && !pending) return <div className='books'>Книг не найдено: {error}</div>
  if (books.length === 0) return <div className='books'>{pending ? <CustomSpinner /> : 'Книг не найдено'}</div>

  return <div className='books'>
    {pending ? <CustomSpinner /> : <div className='books__found'>{`Найдено: ${totalItems} книг`}</div>}
    <BooksList books={books} category={category} />
    {isNextBooksButtonVisible ? <Button variant="outlined" onClick={fetchNextBooks} disabled={pending}>
      {pending ? 'загрузка...' : 'загрузить еще 30 книг'}
    </Button> : null}
  </div>
}

export default Books
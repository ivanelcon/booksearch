import {FunctionComponent} from "react"
import './Book.scss'
import {BookType} from "../../types"

const defaultThumbnail = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif'

interface BookProperties extends BookType {
}

const Book: FunctionComponent<BookProperties> = props => {
  let {id, title, authors, categories, thumbnail} = props

  let category = undefined
  let authorsStringified = undefined
  if (authors) authorsStringified = authors.join(', ')
  if (categories) category = categories[0]
  if (thumbnail === undefined) thumbnail = defaultThumbnail

  return <div className='book'>
    <div className='book__thumbnail'>
      <img src={thumbnail} alt='nothumbnail' />
    </div>
    <div className='book__info'>
      <div className='book__title'><b>Название: </b>{title}</div>
      <div className='book__authors'><b>Авторы: </b>{authorsStringified}</div>
      <div className='book__category'><b>Категория: </b>{category}</div>
    </div>
  </div>
}

export default Book
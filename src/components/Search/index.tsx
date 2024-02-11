
import {FunctionComponent} from 'react'

import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"

interface SearchProperties {
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
}

const Search: FunctionComponent<SearchProperties> = props => {
  const {value, onSubmit, onChange} = props

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(value)
  }

  return <form onSubmit={submitHandler}>
      <TextField
        sx={{width: '80%', ml: 1}}
        label="Найти книги"
        variant="outlined"
        placeholder="нажмите Enter для поиска"
        size="small"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{fill: 'blue'}} />
      </IconButton>
    </form>
}

export default Search
import * as React from 'react'
import {FunctionComponent} from "react"
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import MUISelect, {SelectChangeEvent} from '@mui/material/Select'

interface SelectProperties {
  items: string[]
  selected: string
  name: string
  onChange: (value: any) => void
}

const Select: FunctionComponent<SelectProperties> = props => {
  const {items, selected, name, onChange} = props

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value)
  }

  return (
    <FormControl sx={{m: 1, minWidth: 120}} size="small">
      <FormHelperText>{name}</FormHelperText>
      <MUISelect
        value={selected}
        onChange={handleChange}>
        {items.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
      </MUISelect>
    </FormControl>
  )
}

export default Select
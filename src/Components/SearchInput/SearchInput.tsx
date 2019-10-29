import React from 'react'
import styled from 'styled-components'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

const SearchInput = styled(TextField).attrs({
  fullWidth: true,
  InputProps: {
    endAdornment: <InputAdornment position='end'><SearchIcon /></InputAdornment>
  }
})<TextFieldProps>`
`

export type SearchInputProps = TextFieldProps

export default SearchInput

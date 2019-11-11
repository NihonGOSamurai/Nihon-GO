import React, { useState } from 'react'
import styled from 'styled-components'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Chip from '@material-ui/core/Chip'
import SearchIcon from '@material-ui/icons/Search'
import Box, { BoxProps } from '@material-ui/core/Box'

const InputAdornmentIcon = () =>
  <InputAdornment position='end'>
    <SearchIcon />
  </InputAdornment>

const Input = styled(TextField).attrs({
  fullWidth: true,
  InputProps: {
    endAdornment: <InputAdornmentIcon />
  }
})<TextFieldProps>`
`

const ChipBox = styled(Box).attrs({
  display: 'flex',
  flexWrap: 'wrap'
})<BoxProps>`
  padding-top:${({ theme }) => theme.spacing(2)}px;
  & > * {
    margin: ${({ theme }) => theme.spacing(0.5)}
  }
`

export type SearchInputProps = TextFieldProps

const SearchInput = ({ label, placeholder }: SearchInputProps) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [filters, setFilters] = useState<Array<string>>([])

  const clearSearchInput = () => setSearchInput('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)

  const addFilter = (text: string) => {
    setFilters([text, ...filters])
  }

  const removeFilter = (text: string) => {
    setFilters(filters.filter(item => item !== text))
  }

  const handleKeyPress = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (ev.key === 'Enter') {
      if (!searchInput || filters.includes(searchInput)) {
        return
      }
      addFilter(searchInput)
      clearSearchInput()
    }
  }

  return (
    <>
      <Input
        label={label}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
        value={searchInput}
        onChange={handleInputChange}
      />
      <ChipBox>
        {filters.map((item, i) => <Chip key={i} label={item} onDelete={() => removeFilter(item)} />)}
      </ChipBox>

    </>
  )
}

export default SearchInput

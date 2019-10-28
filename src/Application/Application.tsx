import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/styles'
import Box, { BoxProps } from '@material-ui/core/Box'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import Typography, { TypographyProps } from '@material-ui/core/Typography'
import Container, { ContainerProps } from '@material-ui/core/Container'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import styled from 'styled-components'
import text from '../text'

const MainContainer = styled(Container).attrs({
  maxWidth: 'xl'
})<ContainerProps>`
`

const TitleBox = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center'
})<BoxProps>`
`

const Title = styled(Typography).attrs({
  variant: 'h1',
  gutterBottom: true
})<TypographyProps>`
`

const SearchInputContainer = styled(Container).attrs({
  maxWidth: 'md'
})<ContainerProps>`
`

const SearchInput = styled(TextField).attrs({
  label: text.search.label,
  placeholder: text.search.placeholder,
  fullWidth: true,
  InputProps: {
    endAdornment: <InputAdornment position='end'><SearchIcon /></InputAdornment>
  }
})<TextFieldProps>`
`

const Application = () =>
  <StylesProvider injectFirst>
    <CssBaseline />
    <MainContainer>
      <TitleBox>
        <Title>
          {text.title}
        </Title>
      </TitleBox>
      <SearchInputContainer>
        <SearchInput>
        </SearchInput>
      </SearchInputContainer>
    </MainContainer>
  </StylesProvider>

export default Application

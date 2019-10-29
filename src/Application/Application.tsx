import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/styles'
import Box, { BoxProps } from '@material-ui/core/Box'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import Typography, { TypographyProps } from '@material-ui/core/Typography'
import Container, { ContainerProps } from '@material-ui/core/Container'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button, { ButtonProps } from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import text from '../text'
import { createMuiTheme, Theme } from '@material-ui/core/styles'
import Grid, { GridProps } from '@material-ui/core/Grid'

const defaultTheme = createMuiTheme()

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: {theme: Theme}) => theme.palette.grey[100]};
  }
`

const MainContainer = styled(Container).attrs({
  maxWidth: 'md'
})<ContainerProps>`
  height: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`

const MainContainer_ = styled(Box).attrs({
  component: MainContainer,
  display: 'flex',
  flexDirection: 'column'
})<BoxProps>`
  height: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
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

const ChapterContainer = styled(Container).attrs({
  maxWidth: 'md'
})`
  padding: ${({ theme }) => theme.spacing(3)};
  flex: 1;
  overflow: auto;
`

const ChapterList = styled(Grid).attrs({
  container: true,
  direction: 'column',
  justifycontent: 'center',
  spacing: 2,
  wrap: 'nowrap'
})<GridProps>`
`

const ChapterItem = styled(Grid).attrs({
  item: true,
  xs: 12
})<GridProps>`
`

const ChapterButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})<ButtonProps>`
  padding: ${({ theme }) => theme.spacing(3, 2)}
  background-color: #fff
`

const AddChapterButton = styled(Button).attrs({
  variant: 'outlined',
  fullWidth: true
})<ButtonProps>`
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3, 2)};
`

const chapters = ['Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3']

const ChapterListItem = ({ chapter }: {chapter: string}) =>
  <ChapterItem>
    <ChapterButton>
      {chapter}
    </ChapterButton>
  </ChapterItem>

const generateChapterListItems = (chapters: Array<string>) => {
  return chapters.map((chapter, i) => <ChapterListItem key={i} chapter={chapter} />)
}

const Application = () =>
  <StylesProvider injectFirst>
    <GlobalStyle theme={defaultTheme} />
    <CssBaseline />
    <MuiThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <MainContainer_>
          <TitleBox>
            <Title>
              {text.title}
            </Title>
          </TitleBox>
          <SearchInputContainer>
            <SearchInput>
            </SearchInput>
          </SearchInputContainer>
          <ChapterContainer>
            <ChapterList>
              {generateChapterListItems(chapters)}
            </ChapterList>
          </ChapterContainer>
          <AddChapterButton>
            <AddIcon />
          </AddChapterButton>
        </MainContainer_>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>

export default Application

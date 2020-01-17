import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/styles'
import Box, { BoxProps } from '@material-ui/core/Box'
import Container, { ContainerProps } from '@material-ui/core/Container'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { createMuiTheme, Theme } from '@material-ui/core/styles'
import MainPage from '../Pages/MainPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Chapter from '../Pages/Chapter'

const defaultTheme = createMuiTheme()

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: {theme: Theme}) => theme.palette.grey[100]};
  }
`

const MDContainer = styled(Container).attrs({
  maxWidth: 'md'
})<ContainerProps>`
`

const MainContent = styled(Box).attrs({
  component: MDContainer
})<BoxProps>`
  height: 100%;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
`

const Application = () =>
  <StylesProvider injectFirst>
    <GlobalStyle theme={defaultTheme} />
    <CssBaseline />
    <MuiThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <MainContent>
          asfadsf
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/chapter" component={Chapter} />
            </Switch>
          </BrowserRouter>
        </MainContent>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>

export default Application

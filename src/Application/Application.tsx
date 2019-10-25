import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider } from '@material-ui/styles'
import Paper, { PaperProps } from '@material-ui/core/Paper'
import Grid, { GridProps } from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'

const MainContent = styled(Container).attrs({
  maxWidth: 'lg'
})<PaperProps>`
`

const GridContainer = styled(Grid).attrs({
  container: true,
  spacing: 2,
  justify: 'center'
})<GridProps>`
`

const GridItem = styled(Grid).attrs({
  item: true,
  lg: 6,
  cols: 2
})<GridProps>`
`

const Application = () =>
  <StylesProvider injectFirst>
    <CssBaseline />
    <GridContainer>
      <GridItem>
        <MainContent>
          <Paper>
        asdf
          </Paper>
        </MainContent>
      </GridItem>
      <GridItem>
        <MainContent>
          <Paper>
        asdf
          </Paper>
        </MainContent>
      </GridItem>
    </GridContainer>
  </StylesProvider>

export default Application

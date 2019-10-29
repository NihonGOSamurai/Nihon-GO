import React from 'react'
import styled from 'styled-components'
import ChapterBase, { ChapterBaseProps } from '../../Components/ChapterBase'
import Grid, { GridProps } from '@material-ui/core/Grid'

const Item = styled(Grid).attrs({
  item: true,
  xs: 12
})<GridProps>`
`

const ChapterButton = styled(ChapterBase).attrs({
  variant: 'contained'
})<ChapterBaseProps>`
  background-color: #fff;
`

export interface ChapterListItemProps {
  chapter: string
}

const ChapterListItem = ({ chapter }: ChapterListItemProps) =>
  <Item>
    <ChapterButton>
      {chapter}
    </ChapterButton>
  </Item>

export default ChapterListItem

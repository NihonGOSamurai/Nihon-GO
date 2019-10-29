import styled from 'styled-components'
import Grid, { GridProps } from '@material-ui/core/Grid'

const ChapterList = styled(Grid).attrs({
  container: true,
  direction: 'column',
  justifycontent: 'center',
  spacing: 2,
  wrap: 'nowrap'
})<GridProps>`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

export type ChapterListProps = GridProps

export default ChapterList

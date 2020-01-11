import React from 'react'
import styled from 'styled-components'
import ChapterBase, { ChapterBaseProps } from '../ChapterBase'
import AddIcon from '@material-ui/icons/Add'

const ChapterButton = styled(ChapterBase)<ChapterBaseProps>`
  margin-top: ${({ theme }) => theme.spacing(3)};
`

export type AddChapterProps = ChapterBaseProps

const AddChapter = (props: ChapterBaseProps) =>
  <ChapterButton variant='outlined' {...props} >
    <AddIcon />
  </ChapterButton>

export default AddChapter

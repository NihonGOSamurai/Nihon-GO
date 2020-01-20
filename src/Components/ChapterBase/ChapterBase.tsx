import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import React, { ReactNode } from 'react'

const ChapterButton = styled(Button).attrs({
  component: Link,
  fullWidth: true
})<ChapterBaseProps>`
  padding: ${({ theme }) => theme.spacing(3, 2)};
`

export interface ChapterBaseProps {
  variant?: 'text' | 'outlined' | 'contained'
  to: string
  children: ReactNode
}

const ChapterBase = (props: ChapterBaseProps) =>
  <ChapterButton
    {...props}
  />

export default ChapterBase

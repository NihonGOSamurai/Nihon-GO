import styled from 'styled-components'
import Button, { ButtonProps } from '@material-ui/core/Button'
import React from 'react'

const ChapterButton = styled(Button).attrs({
  fullWidth: true
})<ButtonProps>`
  padding: ${({ theme }) => theme.spacing(3, 2)};
`

export type ChapterBaseProps = Omit<ButtonProps, 'fullWidth'>

const ChapterBase = (props: ChapterBaseProps) =>
  <ChapterButton
    {...props}
  />

export default ChapterBase

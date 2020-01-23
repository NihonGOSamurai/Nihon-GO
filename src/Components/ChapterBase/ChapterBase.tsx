import styled from 'styled-components'
import Button, { ButtonProps } from '@material-ui/core/Button'
import React from 'react'
import { useHistory } from 'react-router-dom'

const ChapterButton = styled(Button).attrs({
  fullWidth: true
})<ButtonProps>`
  padding: ${({ theme }) => theme.spacing(3, 2)};
`

export type ChapterBaseProps = Omit<ButtonProps, 'fullWidth'> & { to: string}

const ChapterBase = ({ to, ...props }: ChapterBaseProps) => {
  const { push } = useHistory()
  const onClick = () => push(to)
  return (
    <ChapterButton
      onClick={onClick}
      {...props}
    />
  )
}

export default ChapterBase

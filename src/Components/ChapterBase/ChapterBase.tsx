import styled from 'styled-components'
import Button, { ButtonProps } from '@material-ui/core/Button'

const ChapterBase = styled(Button).attrs({
  fullWidth: true
})<ButtonProps>`
  padding: ${({ theme }) => theme.spacing(3, 2)};
`

export type ChapterBaseProps = Omit<ButtonProps, 'fullWidth'>

export default ChapterBase

import { Theme, Fab } from '@material-ui/core'
import styled, { css } from 'styled-components'

const fabStyle = ({ theme: { spacing } }: { theme: Theme }) => css`
  position: absolute;
  bottom: ${spacing(2)};
  right: ${spacing(2)};
`

const FAB = styled(Fab)`
  ${fabStyle}
`

export default FAB

import React from 'react'
import styled, { css } from 'styled-components'
import Box, { BoxProps } from '@material-ui/core/Box'
import Typography, { TypographyProps } from '@material-ui/core/Typography'
import { useLocation } from 'react-router-dom'
import text from '../../text'
import { Theme } from '@material-ui/core'

type TitleBoxProps = {
  isExtended: boolean
}

const OmittedBox = ({ isExtended, ...props }: TitleBoxProps) => <Box {...props} />

const titleBoxStyle = ({ isExtended, theme: { transitions } }: { theme: Theme, isExtended: boolean}) => css`
  height: ${isExtended ? 280 : 120}px;
  background: white;
  transition: ${transitions.create(['height'], {
    duration: transitions.duration.enteringScreen,
    easing: transitions.easing.sharp
  })};
`

const TitleBox = styled(OmittedBox).attrs({
  display: 'flex',
  justifyContent: 'center'
})<BoxProps & TitleBoxProps>`
${titleBoxStyle}
`

const Text = styled(Typography).attrs({
  variant: 'h1',
  gutterBottom: true
})<TypographyProps>`
`

export interface TitleProps {
  title: string
}

const checkMainPage = (pathname: string): boolean => pathname === '/' || pathname === 'main'

const Title = () => {
  const { pathname } = useLocation()
  const isMainPage = checkMainPage(pathname)
  const { title } = text
  return (
    <TitleBox isExtended={isMainPage}>
      <Text>
        {title}
      </Text>
    </TitleBox>
  )
}

export default Title

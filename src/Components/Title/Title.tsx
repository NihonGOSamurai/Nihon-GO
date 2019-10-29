import React from 'react'
import styled from 'styled-components'
import Box, { BoxProps } from '@material-ui/core/Box'
import Typography, { TypographyProps } from '@material-ui/core/Typography'

const TitleBox = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center'
})<BoxProps>`
`

const Text = styled(Typography).attrs({
  variant: 'h1',
  gutterBottom: true
})<TypographyProps>`
`

export interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) =>
  <TitleBox>
    <Text>
      {title}
    </Text>
  </TitleBox>

export default Title

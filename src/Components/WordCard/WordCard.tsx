import React from 'react'
import Card from '@material-ui/core/Card'
import { CardContent, Typography, Grid, IconButton, Menu, MenuItem, GridProps } from '@material-ui/core'
import { Word } from '../../ChapterItem'
import FitTextBox, { FittyOptions } from '../FitTextBox'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import styled from 'styled-components'
import { useWordCard } from './useWordCard'

export interface WordCardProps {
  word: Word,
  onModifyMenuClick: (word: Word) => void
  onDeleteMenuClick: (word: Word) => void
}

const fittyOptions: FittyOptions = {
  maxSize: 32,
  multiLine: false
}

const AlignCenterGrid = styled(Grid)<GridProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WordCard = (params: WordCardProps) => {
  const {
    word: {
      text,
      hiraganas,
      meanings
    }
  } = params
  const {
    menuAnchorElement,
    handleMenuClick,
    handleClose,
    handleModifyMenuClick,
    handleDeleteMenuClick,
    isOpened
  } = useWordCard(params)

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <AlignCenterGrid item xs={3}>
            <FitTextBox
              component='span'
              fittyOptions={fittyOptions}
            >
              {text}
            </FitTextBox>
          </AlignCenterGrid>
          <Grid item xs={4}>
            {hiraganas.map((item, i) => <Typography key={i} variant='h6'>{item.value}</Typography>)}
          </Grid>
          <Grid item xs={4}>
            {meanings.map((item, i) => <Typography key={i} variant='h6'>{item.value}</Typography>)}
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={handleMenuClick}
            >
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Menu
          anchorEl={menuAnchorElement}
          open={isOpened}
          onClose={handleClose}
          keepMounted
        >
          <MenuItem
            onClick={handleModifyMenuClick}
          >
            Modify
          </MenuItem>
          <MenuItem
            style={{ color: 'red' }}
            onClick={handleDeleteMenuClick}
          >
            Delete
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  )
}
export default WordCard

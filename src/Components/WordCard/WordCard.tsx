import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import { CardContent, Typography, Grid, IconButton, Menu, MenuItem, GridProps } from '@material-ui/core'
import { Word } from '../../ChapterItem'
import FitTextBox, { FittyOptions } from '../FitTextBox'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import styled from 'styled-components'

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

const WordCard = ({ word, onModifyMenuClick, onDeleteMenuClick }: WordCardProps) => {
  const { text, hiraganas, meanings } = word
  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null)
  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLElement>) => setMenuAnchorElement(currentTarget)
  const handleClose = () => setMenuAnchorElement(null)
  const handleModifyMenuClick = () => onModifyMenuClick(word)
  const handleDeleteMenuClick = () => onDeleteMenuClick(word)
  const isOpened = Boolean(menuAnchorElement)
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
              onClick={handleClick}
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

import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import { CardContent, Typography, Grid, IconButton, Menu, MenuItem } from '@material-ui/core'
import { Word } from '../../ChapterItem'
import FitTextBox from '../FitTextBox'
import MoreVertIcon from '@material-ui/icons/MoreVert'

export interface WordCardProps {
  word: Word
}

const WordCard = ({ word: { text, hiraganas, meanings } }: WordCardProps) => {
  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null)
  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLElement>) => setMenuAnchorElement(currentTarget)
  const handleClose = () => setMenuAnchorElement(null)
  const isOpened = Boolean(menuAnchorElement)
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={3}>
            <FitTextBox component='span' >
              {text}
            </FitTextBox>
          </Grid>
          <Grid item xs={4}>
            {hiraganas.map((item, i) => <Typography key={i} variant='h6'>{item.value}</Typography>)}
          </Grid>
          <Grid item xs={4}>
            {meanings.map((item, i) => <Typography key={i} variant='h6'>{item.value}</Typography>)}
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={handleClick}>
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
          <MenuItem>
            Modify
          </MenuItem>
          <MenuItem style={{ color: 'red' }}>
            Delete
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  )
}
export default WordCard

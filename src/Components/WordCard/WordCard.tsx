import React from 'react'
import Card from '@material-ui/core/Card'
import { CardContent, Typography } from '@material-ui/core'
import { Word } from '../../ChapterItem'
import FitTextBox from '../FitTextBox'

export interface WordCardProps {
  word: Word
}

const WordCard = ({ word: { text, hiraganas } }: WordCardProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <FitTextBox component='div' >
          {text}
        </FitTextBox>
        {hiraganas.map((item, i) => <Typography key={i} variant='h6'>{item.value}</Typography>)}
        {hiraganas.map((item, i) => <Typography key={i} variant='h6'>{item.value}</Typography>)}
      </CardContent>
    </Card>
  )
}
export default WordCard

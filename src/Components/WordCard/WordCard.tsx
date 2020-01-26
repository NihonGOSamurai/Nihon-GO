import React from 'react'
import Card from '@material-ui/core/Card'
import { CardContent, Typography } from '@material-ui/core'
import { Word } from '../../ChapterItem'

export interface WordCardProps {
  word: Word
}

const WordCard = ({ word: { text, hiraganas } }: WordCardProps) =>
  <Card variant="outlined">
    <CardContent>
      <Typography variant='h5'>{text}</Typography>
      {hiraganas.map((item, i) => <Typography key={i} variant='h6'>{item.value}</Typography>)}
      {hiraganas.map((item, i) => <Typography key={i} variant='h6'>{item.value}</Typography>)}
    </CardContent>
  </Card>

export default WordCard

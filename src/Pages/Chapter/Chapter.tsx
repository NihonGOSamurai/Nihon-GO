import React from 'react'
import { useChapterItem } from './useChapter'
import WordCard from '../../Components/WordCard'
import { Grid } from '@material-ui/core'

const Chapter = () => {
  const chapterItem = useChapterItem()
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <WordCard word={chapterItem.words[0]} />
        </Grid>

        <Grid item xs={12} md={6}>
          <WordCard word={chapterItem.words[0]} />
        </Grid>

      </Grid>
    </>
  )
}

export default Chapter

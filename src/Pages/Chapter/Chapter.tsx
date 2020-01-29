import React from 'react'
import { Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useChapterItem } from './useChapter'
import WordCard from '../../Components/WordCard'
import { Word } from '../../ChapterItem'
import FAB from '../../Components/FAB'

const toWordCard = (word: Word, i: number) =>
  <Grid
    key={i}
    item xs={12}
    md={6}
  >
    <WordCard
      word={word}
      onModifyMenuClick={(word) => console.log(word)}
      onDeleteMenuClick={(word) => console.log(word)}
    />
  </Grid>

const Chapter = () => {
  const {
    chapterItem,
    handleAddWord
  } = useChapterItem()
  return (
    <>
      <Grid container spacing={1}>
        {chapterItem.words.map(toWordCard)}
      </Grid>
      <FAB
        onClick={handleAddWord}
      >
        <AddIcon />
      </FAB>
    </>
  )
}

export default Chapter

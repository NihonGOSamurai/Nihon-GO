import React from 'react'
import { Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useChapterItem } from './useChapter'
import WordCard from '../../Components/WordCard'
import { Word } from '../../ChapterItem'
import FAB from '../../Components/FAB'
import AddWord from '../../Components/AddWord'

const toWordCard = (word: Word, i: number) => (
  <Grid key={i} item xs={12} md={6}>
    <WordCard
      word={word}
      onModifyMenuClick={(word) => console.log(word)}
      onDeleteMenuClick={(word) => console.log(word)}
    />
  </Grid>
)

const Chapter = () => {
  const { chapterItems, onAddWordClick } = useChapterItem()
  return (
    <>
      <AddWord onAddWordClick={onAddWordClick} />
      <Grid container spacing={1}>
        {chapterItems.words.map(toWordCard)}
      </Grid>
      <FAB>
        <AddIcon />
      </FAB>
    </>
  )
}

export default Chapter

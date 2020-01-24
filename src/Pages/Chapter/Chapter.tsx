import React from 'react'
import { useChapterItem } from './useChapter'
import WordCard from '../../Components/WordCard'

const Chapter = () => {
  const chapterItem = useChapterItem()
  return (
    <>
      <WordCard word={chapterItem.words[0]} />
    </>
  )
}

export default Chapter

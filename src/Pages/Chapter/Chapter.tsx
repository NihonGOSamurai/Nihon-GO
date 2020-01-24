import React from 'react'
import { useChapterItem } from './useChapter'

const Chapter = () => {
  const chapterItem = useChapterItem()
  return (
    <>
      {JSON.stringify(chapterItem, null, '\t')}
    </>
  )
}

export default Chapter

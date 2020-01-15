import React, { useState } from 'react'
import Title from '../../Components/Title'
import SearchInput from '../../Components/SearchInput'
import AddChapter from '../../Components/AddChapter'
import ChapterList from '../../Components/ChapterList'
import ChapterListItem from '../../Components/ChapterListItem'
import text from '../../text'
import { chapters } from '../../dummy'
import AddChapterDialog from '../../Components/AddChapterDialog'

const generateChapterListItems = (chapters: Array<string>) => chapters.map((chapter, i) => <ChapterListItem key={i} chapter={chapter} />)

const MainPage = () => {
  return (
    <>
      <Title title={text.title} />
      <SearchInput label={text.search.label} placeholder={text.search.placeholder} />
      <AddChapter />
      <ChapterList>
        {generateChapterListItems(chapters)}
      </ChapterList>
      <AddChapterDialog />
    </>
  )
}

export default MainPage

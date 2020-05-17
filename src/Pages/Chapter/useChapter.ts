import { chapterItem } from '../../dummy'
import { useState } from 'react'
import { HiraganaType } from '../../ChapterItem'

type ChapterRouteParams = {
  chapterID: string;
};

export interface ChapterItemProps {
  onAddWordClick: (hanja: string, hiragana: string, meaning: string) => void
}

export const useChapterItem = () => {
  const [chapterItems, setChapterItems] = useState(chapterItem)
  return {
    chapterItems,
    onAddWordClick: (hanja: string, hiragana: string, meaning: string) => {
      setChapterItems({
        ...chapterItems,
        words: [
          ...chapterItems.words,
          {
            text: hanja,
            hiraganas: [
              {
                type: HiraganaType.None,
                value: hiragana
              }
            ],
            meanings: [
              {
                value: meaning
              }
            ]
          }
        ]
      })
    }
  }
}

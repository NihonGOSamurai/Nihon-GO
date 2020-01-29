import { chapterItem } from '../../dummy'

type ChapterRouteParams = {
  chapterID: string
}

export const useChapterItem = () => {
  return {
    chapterItem,
    handleAddWord: () => console.log('add word!')
  }
}

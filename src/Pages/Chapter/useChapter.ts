import { ChapterItem } from './ChapterItem'
import { chapterItem } from '../../dummy'

type ChapterRouteParams = {
  chapterID: string
}

export const useChapterItem = (): ChapterItem => {
  return chapterItem
}

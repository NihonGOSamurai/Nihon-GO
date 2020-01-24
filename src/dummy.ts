import { ChapterItem, HiraganaType } from './Pages/Chapter/ChapterItem'

const chapters = ['Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3', 'Chap0', 'Chap1', 'Chap2', 'Chap3']

const chapterItem: ChapterItem = {
  chapterID: 'chapterID',
  title: 'title',
  tags: ['tag1', 'tag2'],
  words: [{
    hiraganas: [{
      type: HiraganaType.None,
      value: 'hiragana-value'
    }, {
      type: HiraganaType.Kunyomi,
      value: 'kunyomi-value'
    }, {
      type: HiraganaType.Onyomi,
      value: 'onyomi-value'
    }],
    meanings: [{
      value: 'meaings-value'
    }]
  }]
}

export {
  chapters,
  chapterItem
}

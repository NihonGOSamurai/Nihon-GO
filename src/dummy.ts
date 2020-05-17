import { ChapterItem, HiraganaType } from './ChapterItem'

const chapters = ['Chap1', 'Chap2']

const chapterItem: ChapterItem = {
  chapterID: 'chapterID',
  title: 'title',
  tags: ['tag1', 'tag2'],
  words: [
    {
      text: '食もたれする',
      hiraganas: [
        {
          type: HiraganaType.None,
          value: 'しょくもたれ'
        },
        {
          type: HiraganaType.Kunyomi,
          value: 'kunyomi-value'
        },
        {
          type: HiraganaType.Onyomi,
          value: 'onyomi-value'
        }
      ],
      meanings: [
        {
          value: '체하다'
        },
        {
          value: 'meaning2'
        },
        {
          value: 'meaning3'
        },
        {
          value: 'meaning4'
        }
      ]
    }
  ]
}

export { chapters, chapterItem }

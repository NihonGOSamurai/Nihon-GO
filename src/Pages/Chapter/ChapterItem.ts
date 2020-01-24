export interface ChapterItem {
  chapterID: string
  title: string
  tags: Array<string>
  words: Array<Word>
}

export interface Word {
  hiraganas: Array<Hiragana>
  meanings: Array<Meaning>
}

export enum HiraganaType {
  None, // 기본
  Kunyomi, // 훈독
  Onyomi, // 음독
}

export interface Hiragana {
  type: HiraganaType
  value: string
}

export interface Meaning {
  value: string
}

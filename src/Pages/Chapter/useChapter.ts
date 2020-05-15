import { chapterItem } from "../../dummy";
import { ChapterItem, HiraganaType, Word } from "../../ChapterItem";
import { useState } from "react";

type ChapterRouteParams = {
  chapterID: string;
};

export const useChapterItem = () => {
  //[chapterItem, setChapterItem] = useState<ChapterItem>

  const [chapterItems, setChapterItems] = useState(chapterItem);
  // const [chapterItem, setChapterItem] = useState({
  //   chapterID: "",
  //   title: "",
  //   tags: ["tag1", "tag2"],
  //   words: [
  //     {
  //       text: "",
  //       hiraganas: [
  //         {
  //           type: HiraganaType.None,
  //           value: "TypeNone",
  //         },
  //       ],
  //       meanings: [
  //         {
  //           value: "meaning",
  //         },
  //       ],
  //     },
  //   ],
  // });

  // let chapterItem: ChapterItem = {
  //   chapterID: "chapterID",
  //   title: "title",
  //   tags: ["tag1", "tag2"],
  //   words: [
  //     {
  //       text: "",
  //       hiraganas: [
  //         {
  //           type: HiraganaType.None,
  //           value: "",
  //         },
  //         {
  //           type: HiraganaType.Kunyomi,
  //           value: "",
  //         },
  //         {
  //           type: HiraganaType.Onyomi,
  //           value: "",
  //         },
  //       ],
  //       meanings: [
  //         {
  //           value: "",
  //         },
  //       ],
  //     },
  //   ],
  // };

  return {
    chapterItems,
    handleAddWord: (hanja: string, hiragana: string, meaning: string) => {
      let word: Word;
      // console.log(chapterItems.words);

      // chapterItems.words = chapterItems.words.concat(chapterItems.words);

      //setChapterItem({hanja, ...chapterItem.words});
      //console.log(chapterItem.words[0].hiraganas[0].value);

      //setChapterItems()

      // setChapterItems([chapterItems.words].concat(param));

      //setChapterItems(chapterItem.words.concat(param));
      //console.log(chapterItem.words[0]["hiraganas"]);
    },
  };
};

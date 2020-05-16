import { chapterItem } from "../../dummy";
import React from "react";
import { ChapterItem, HiraganaType, Word } from "../../ChapterItem";
import { useState } from "react";

type ChapterRouteParams = {
  chapterID: string;
};

export const useChapterItem = () => {
  const [chapterItems, setChapterItems] = React.useState(chapterItem);
  return {
    chapterItems,
    handleAddWord: (hanja: string, hiragana: string, meaning: string) => {
      setChapterItems({
        ...chapterItems,
        words: [
          ...chapterItems.words,
          {
            text: hanja,
            hiraganas: [
              {
                type: HiraganaType.None,
                value: hiragana,
              },
            ],
            meanings: [
              {
                value: meaning,
              },
            ],
          },
        ],
      });
      //console.log(chapterItems);
    },
  };
};

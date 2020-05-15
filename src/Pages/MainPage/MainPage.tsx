import React, { useState } from "react";
import SearchInput from "../../Components/SearchInput";
import ChapterList from "../../Components/ChapterList";
import ChapterListItem from "../../Components/ChapterListItem";
import AddChapter from "../../Components/AddChapter";
import text from "../../text";
import { chapters } from "../../dummy";

const generateChapterListItems = (chapters: Array<string>) =>
  chapters.map((chapter, i) => <ChapterListItem key={i} chapter={chapter} />);

const MainPage = () => {
  //  const [c, setC] = useState("");
  return (
    <>
      <SearchInput
        label={text.search.label}
        placeholder={text.search.placeholder}
      />
      <AddChapter />
      <ChapterList>{generateChapterListItems(chapters)}</ChapterList>
    </>
  );
};

export default MainPage;

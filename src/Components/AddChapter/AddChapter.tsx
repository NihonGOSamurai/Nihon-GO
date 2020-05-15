import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
//import { chapters } from "../../dummy";

import styled from "styled-components";

const AddChapter = () => {
  //const [chapter, setChapter] = useState("");

  //const [chapter, setChapter] = useState<AddChapterItemProps>({chapter: "Chap1"});

  const onClick = () => {
    //   chapter = chapter.concat("aaa");
    //setChapter([...chapters, chapters]);
    //   setChapter([...chapters, "Chap1"]);
    //console.log(chapter);
  };
  return (
    <Button onClick={onClick} fullWidth={true} variant="outlined">
      <AddIcon />
    </Button>
  );
};

export default AddChapter;

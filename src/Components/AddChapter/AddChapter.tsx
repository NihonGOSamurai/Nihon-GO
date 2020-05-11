import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const AddChapter = () => {
  const onClick = () => {
    console.log("add chapter page !");
  };
  return (
    <Button onClick={onClick} fullWidth={true} variant="outlined">
      <AddIcon />
    </Button>
  );
};

export default AddChapter;

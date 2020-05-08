import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 500,
    height: 500,
  },
  hanjaTextField: {
    fontSize: 100,
    lineHeight: 10,
  },
  hiraganaTextField: {},
  right: {
    float: "right",
    width: 200,
    height: 300,
  },
  left: {
    float: "left",
    width: 200,
    height: 300,
  },
}));

const AddChapter = () => {
  const classes = useStyles();

  const [hanjaInput, setHanjaInput] = React.useState<string>("");
  const [hiraganaInput, setHiraganaInput] = React.useState<string>("");
  const [meaningInput, setMeaningInput] = React.useState<string>("");

  const [open, setOpen] = React.useState(false);

  const handleHanjaInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHanjaInput(e.target.value);

  const handleHiraganaInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHiraganaInput(e.target.value);

  const handleMeaningInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMeaningInput(e.target.value);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log(hanjaInput, hiraganaInput, meaningInput);
    setOpen(false);
  };

  const addHiragana = () => {
    console.log("add hiragana text field!");
  };

  return (
    <div>
      <Button onClick={handleOpen} fullWidth={true} variant="outlined">
        <AddIcon />
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1>Description</h1>
            <div className={classes.left}>
              <h2>漢字</h2>
              <TextField
                className={classes.hanjaTextField}
                label="한자"
                placeholder="한자를 입력하세요."
                variant="outlined"
                value={hanjaInput}
                onChange={handleHanjaInputChange}
              />
            </div>
            <div className={classes.right}>
              <h2>ひらがな</h2>
              <TextField
                className={classes.hiraganaTextField}
                label="히라가나"
                placeholder="히라가나를 입력하세요."
                variant="outlined"
                value={hiraganaInput}
                onChange={handleHiraganaInputChange}
              />
              <h2>意味</h2>
              <TextField
                label="뜻"
                placeholder="뜻을 입력하세요."
                variant="outlined"
                value={meaningInput}
                onChange={handleMeaningInputChange}
              />
            </div>

            <div>
              <Button fullWidth={true} onClick={handleClose} variant="outlined">
                Add
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddChapter;

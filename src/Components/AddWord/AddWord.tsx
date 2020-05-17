import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { ChapterItemProps } from '../../Pages/Chapter/useChapter'

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledPaper = styled.div`
  ${({ theme }) => `
  background-color: ${theme.palette.background.paper};
  border: 2px;
  box-shadow: ${theme.shadows[5]};
  padding: ${theme.spacing(2, 4, 3)};
  width: 300px;
  height: 550px;
  `}
`

const AddButton = styled(Button)`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`

const InputAdornmentIcon = () => (
  <InputAdornment position="end">
    <IconButton size="small">
      <AddIcon />
    </IconButton>
  </InputAdornment>
)

const AddWord = (onAddWordClick: ChapterItemProps) => {
  const [hanjaInput, setHanjaInput] = React.useState<string>('')
  const [hiraganaInput, setHiraganaInput] = React.useState<string>('')
  const [meaningInput, setMeaningInput] = React.useState<string>('')

  const [open, setOpen] = React.useState(false)

  const handleHanjaInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHanjaInput(e.target.value)

  const handleHiraganaInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHiraganaInput(e.target.value)

  const handleMeaningInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMeaningInput(e.target.value)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    onAddWordClick.onAddWordClick(hanjaInput, hiraganaInput, meaningInput)
    setHanjaInput('')
    setHiraganaInput('')
    setMeaningInput('')
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen} fullWidth={true} variant="outlined">
        <AddIcon />
      </Button>

      <StyledModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <StyledPaper>
            <h1>漢字</h1>
            <TextField
              label="漢字"
              placeholder="한자를 입력하세요"
              variant="outlined"
              value={hanjaInput}
              onChange={handleHanjaInputChange}
              fullWidth={true}
            />
            <h1>ひらがな</h1>
            <TextField
              label="ひらがな"
              placeholder="히라가나를 입력하세요"
              variant="outlined"
              value={hiraganaInput}
              onChange={handleHiraganaInputChange}
              fullWidth={true}
              InputProps={{
                endAdornment: <InputAdornmentIcon />
              }}
            />
            <h1>意味</h1>
            <TextField
              label="意味"
              placeholder="의미를 입력하세요"
              variant="outlined"
              value={meaningInput}
              onChange={handleMeaningInputChange}
              fullWidth={true}
              InputProps={{
                endAdornment: <InputAdornmentIcon />
              }}
            />
            <AddButton
              fullWidth={true}
              onClick={handleClose}
              variant="outlined"
            >
              <AddIcon />
            </AddButton>
          </StyledPaper>
        </Fade>
      </StyledModal>
    </div>
  )
}

export default AddWord

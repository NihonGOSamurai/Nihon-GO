import React, { useState } from 'react'
import { ClickAwayListener, Typography, TextField } from '@material-ui/core'

type SharedProps = {
  value: string
}

type LabelProps = {
  editModeOn: () => void
} & SharedProps

type EditProps = {
  editModeOff: (text: string) => void
} & SharedProps

const Label = ({ value, editModeOn }: LabelProps) => {
  return (
    <Typography
      variant="h6"
      onClick={editModeOn}
    >
      {value}
    </Typography>
  )
}

const Edit = ({ value, editModeOff }: EditProps) => {
  const [editValue, setEditValue] = useState(value)
  const handleClickAway = () => {
    editModeOff(editValue)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setEditValue(event.target.value)
  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
    >
      <TextField
        value={editValue}
        onChange={handleChange}
      />
    </ClickAwayListener>
  )
}

const useEditableText = () => {
  const [value, setValue] = useState('temp')
  const [isEditing, setIsEditing] = useState(false)
  const editModeOn = () => setIsEditing(true)
  const editModeOff = (text: string) => {
    setValue(text)
    setIsEditing(false)
  }

  return {
    value,
    isEditing,
    editModeOn,
    editModeOff
  }
}

const EditableText = () => {
  const { value, isEditing, editModeOn, editModeOff } = useEditableText()
  if (isEditing) {
    return (
      <Edit
        value={value}
        editModeOff={editModeOff}
      />
    )
  } else {
    return (
      <Label
        value={value}
        editModeOn={editModeOn}
      />
    )
  }
}

export default EditableText

import React, { useState } from 'react'
import { ClickAwayListener, Typography } from '@material-ui/core'

type SharedProps = {
  value: string
}

type LabelProps = {
  editModeOn: () => void
} & SharedProps

type EditProps = {
  editModeOff: () => void
  onEditFinished: (text: string) => void
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

const Edit = ({ value, editModeOff, onEditFinished }: EditProps) => {
  const handleClickAway = () => {
    onEditFinished(value + 't')
    editModeOff()
  }
  return (
    <ClickAwayListener
      onClickAway={handleClickAway}
    >
      <div>
        {value}
      </div>
    </ClickAwayListener>
  )
}

const EditableText = () => {
  const [value, setValue] = useState('temp')
  const [isEditing, setIsEditing] = useState(false)
  const handleEditFinished = (text: string) => setValue(text)
  const editModeOn = () => setIsEditing(true)
  const editModeOff = () => setIsEditing(false)
  if (isEditing) {
    return (
      <Edit
        onEditFinished={handleEditFinished}
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

import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
const AddChapter = () => {
  const onClick = () => {
  }
  return (
    <Button onClick={onClick} fullWidth={true} variant="outlined">
      <AddIcon />
    </Button>
  )
}

export default AddChapter

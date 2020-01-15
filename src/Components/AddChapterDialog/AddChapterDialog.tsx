import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'

const SlideTransition = React.forwardRef<unknown, TransitionProps>(function Transition (props, ref) {
  return <Slide
    direction='up'
    ref={ref}
    {...props}
  />
})

const AddChapterDialog = () =>
  <Dialog
    open={true}
    TransitionComponent={SlideTransition}
  >
    <DialogTitle>Title</DialogTitle>
    <DialogContent>TEMPTEMP</DialogContent>
    <DialogActions>
      <Button>temp</Button>
      <Button>temp</Button>
      <Button>temp</Button>
    </DialogActions>
  </Dialog>

export default AddChapterDialog

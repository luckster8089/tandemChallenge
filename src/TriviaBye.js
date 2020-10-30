import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import mickyMouseBye from './assets/mickyMouseBye.gif';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './styles/TriviaByeStyles'

function TriviaBye({ open, closeByeModal, classes }) {
  return (
    <Dialog
    open={open}
    onClose={closeByeModal}
    className={classes.root}
    aria-labelledby="alert-dialog-bye"
    aria-describedby="alert-dialog-bye"
    >
      <DialogTitle id="alert-dialog-title">
        See you soon!
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-bye-gif">
          <img src={mickyMouseBye} alt="bye" />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default withStyles(styles)(TriviaBye)

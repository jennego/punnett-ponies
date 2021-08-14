import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import HorseItem from "./horseitem";

const SimpleDialog = (props) => {
  const { onClose, selectedValue, open, foal } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
    >
      <DialogContent>
        <DialogTitle>
          <h3>🎉 Congrats! You got... </h3>
        </DialogTitle>
        <DialogContentText id="alert-dialog-slide-description">
          {console.log("dialog foal", foal)}
          <HorseItem horse={foal} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Save Horse
        </Button>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SimpleDialog;

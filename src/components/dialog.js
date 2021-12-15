import React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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

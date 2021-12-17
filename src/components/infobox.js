import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function InfoBox() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        onClick={handleClick}
        // onMouseOverCapture={handleClick}
      >
        Info
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <div
          onClick={handleClose}
          style={{ float: "right", cursor: "pointer" }}
        >
          CLOSE
        </div>
        <div style={{ width: "500px" }}>
          <Typography variant="h5" component="h2">
            Agouti (AA / aa /Aa)
          </Typography>
          <Typography>
            Agouti affects black only. If dominant (AA, Aa), it restricts the
            black to points (bay) and if rescessive (aa), the horse will have a
            black base, assuming a black/bay base (EE or Ee). It has no effect
            on red (ee).
          </Typography>
        </div>
      </Popover>
    </div>
  );
}

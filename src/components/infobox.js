import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  width: "500px",
}));

export default function InfoBox() {
  const classes = useStyles();
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
          <Typography className={classes.typography}>
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

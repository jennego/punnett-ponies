import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Header = () => (
  <AppBar position="static" style={{ background: "rebeccapurple" }}>
    <Toolbar>
      <Typography variant="h4" component="h1" style={{ paddingRight: "1rem" }}>
        Punnnet Ponies{" "}
      </Typography>
      <Link to="/" style={{ color: "white", padding: "5px" }}>
        Home
      </Link>
      |
      <Link to="/playground" style={{ color: "white", padding: "5px" }}>
        Playground
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;

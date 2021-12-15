import React from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

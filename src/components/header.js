import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const Header = () => (
  <div style={{ background: "rebeccapurple", color: "white", height: "4rem" }}>
    <Container fluid>
      <h1> Punnet Ponies </h1>
      <div style={{ color: "skyblue" }}>
        <Link to="/"> Home </Link> |<Link to="/playground"> Playground </Link>
      </div>
    </Container>
  </div>
);

export default Header;

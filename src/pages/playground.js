import React from "react";
import { Grid, Button, Container, Paper, Switch } from "@material-ui/core";
import InfoBox from "../components/infobox";

const Playground = () => {
  return (
    <Container>
      <InfoBox />
      <Grid container>
        <Grid item md={6}>
          Options
          <div>
            Agouti <InfoBox />
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>a</Grid>
              <Grid item>
                <Switch className="custom-track" />
              </Grid>
              <Grid item>A</Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item md={6}>
          Horse
          <InfoBox />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Playground;

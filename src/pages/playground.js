import React from "react";
import { Grid, Button, Container, Paper, Switch } from "@material-ui/core";

const Playground = () => {
  return (
    <Container>
      <Grid container>
        <Grid item md={6}>
          Options
          <div>
            Agouti (info)
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>a</Grid>
              <Grid item>
                <Switch />
              </Grid>
              <Grid item>A</Grid>
            </Grid>
          </div>
          <Paper
            style={{ height: "80vh", width: "1000px", background: "red" }}
          />
        </Grid>

        <Grid item md={6}>
          Horse
          <Paper
            style={{ height: "80vh", width: "1000px", background: "magenta" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Playground;

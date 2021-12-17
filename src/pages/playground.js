import React from "react";
import { Grid, Button, Container, Paper, Switch } from "@mui/material";
import InfoBox from "../components/infobox";
import { styled } from "@mui/material/styles";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    // is on
    "&.Mui-checked": {
      color: "#fff",

      "& .MuiSwitch-thumb": {
        backgroundColor: "red",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "red",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "blue",
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "blue",
  },
}));

const Playground = () => {
  return (
    <Container>
      <InfoBox />
      <Grid container>
        <Grid item md={6}>
          Options
          <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
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

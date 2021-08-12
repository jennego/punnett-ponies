import React, { useState } from "react";

import HorseItem from "./components/horseitem";

import { Combination } from "js-combinatorics/combinatorics.js";
import combos from "combos";
import { uniqWith, isEqual, sample } from "lodash";
import { Form, Table, Row, Col } from "reactstrap";
import {
  Button,
  Container,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import SimpleDialog from "./components/dialog";
import confetti from "canvas-confetti";

let bayAg = ["AA", "Aa"];
let blackBayE = ["EE", "Ee"];

const blackArr = combos({
  Ag: ["aa"],
  Ex: blackBayE,
  baseColor: ["black"],
  image: ["./images/horses/black.png"],
}).map((item) => ({
  ...item,
  Ag: item.Ag.split(""),
  Ex: item.Ex.split(""),
}));

const redArr = combos({
  Ag: bayAg,
  Ex: ["ee"],
  baseColor: ["red"],
  image: ["./images/horses/red.png"],
}).map((item) => ({
  ...item,
  Ag: item.Ag.split(""),
  Ex: item.Ex.split(""),
}));

const bayArr = combos({
  Ag: bayAg,
  Ex: blackBayE,
  baseColor: ["bay"],
  image: ["./images/horses/bay.png"],
}).map((item) => ({
  ...item,
  Ag: item.Ag.split(""),
  Ex: item.Ex.split(""),
}));

const assignColor = (horse) => {
  const horseA = horse.Ag.join("");
  const horseE = horse.Ex.join("");
  console.log("bay", blackBayE.includes(horseE));
  console.log(horseA);

  if (horseE === "ee") {
    return "red";
  } else if (horseA === "aa" && blackBayE.includes(horseE)) {
    return "black";
  } else if (bayAg.includes(horseA) && blackBayE.includes(horseE)) {
    return "bay";
  }
};

const getImage = (color) => {
  switch (color) {
    case "bay":
      return "./images/horses/bay.png";
    case "black":
      return "./images/horses/black.png";
    case "red":
      return "./images/horses/red.png";
    default:
      return "no image found";
  }
};

const IndexPage = () => {
  const [breedResults, setBreedResults] = useState();
  const [allResultsArr, setAllResultsArr] = useState();
  const [currentFoal, setCurrentFoal] = useState("hi");

  const [agResult, setAgResult] = useState([]);
  const [exResult, setExResult] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  const [colorHorse1, setColorHorse1] = useState();
  const [colorHorse2, setColorHorse2] = useState();

  const [horse1, setHorse1] = useState();

  const [horse2, setHorse2] = useState();

  const [breedDialogOpen, setBreedDialogOpen] = useState(false);

  const handleBreedOpen = (horse1, horse2) => {
    const result = allResults(horse1, horse2);
    let foal = sample(result.allResultsArr);
    let foalColor = assignColor(foal);
    let foalImage = getImage(foalColor);
    foal.image = foalImage;
    foal.baseColor = foalColor;

    setCurrentFoal(foal);
    setBreedDialogOpen(true);
    confetti();
  };

  const handleBreedClose = (value) => {
    setBreedDialogOpen(false);
  };

  const allResults = (horse1, horse2) => {
    if (horse1 === undefined || horse2 === undefined) {
      return console.log("You need to choose two horses!");
    } else if (horse1 !== undefined && horse2 !== undefined) {
      // bay factor
      let agTraits = horse1.Ag.join("") + horse2.Ag.join("");
      console.log(agTraits);
      let agCombo = new Combination(agTraits, 2);
      let agResult = [...agCombo];
      agResult.map((ag) => ag.sort());
      setAgResult(uniqWith(agResult, isEqual));
      console.log("uniq ag", uniqWith(agResult, isEqual));
      console.log("ag", agResult);

      // red or black
      let exTraits = horse1.Ex.join("") + horse2.Ex.join("");
      let exCombo = new Combination(exTraits, 2);
      let exResult = [...exCombo];
      exResult.map((ex) => ex.sort());
      setExResult(uniqWith(exResult, isEqual));
      console.log("ex", exResult);

      // combine all

      console.log("unique", uniqWith(agResult, isEqual));

      const uniqueTraitCombos = combos({
        Ag: uniqWith(agResult, isEqual),
        Ex: uniqWith(exResult, isEqual),
      }).map((item) => ({
        ...item,
        Ag: item.Ag.sort(),
        Ex: item.Ex.sort(),
      }));

      const noDupeResults = uniqWith(uniqueTraitCombos, isEqual);

      let noDupeResultsWithColor = noDupeResults.map((horse) => ({
        ...horse,
        baseColor: assignColor(horse),
        image: getImage(assignColor(horse)),
      }));

      console.log(noDupeResultsWithColor);

      const allBreedResults = combos({
        Ag: agResult,
        Ex: exResult,
      }).map((item) => ({
        ...item,
        Ag: item.Ag.sort(),
        Ex: item.Ex.sort(),
      }));

      console.log("all results", allBreedResults);
      setAllResultsArr(allBreedResults);
      setBreedResults(noDupeResultsWithColor);

      // spilt arrays for table
      let splitArr = [];

      for (let i = 0; i < uniqWith(exResult, isEqual).length; i++) {
        splitArr.push(
          noDupeResultsWithColor.filter(function (item) {
            return uniqWith(exResult, isEqual)[i].join("") === item.Ex.join("");
          })
        );
      }

      console.log("split array", splitArr);
      setTableRows(splitArr);

      return {
        tableRows: splitArr,
        breedResults: noDupeResultsWithColor,
        allResultsArr: allBreedResults,
      };
    }
  };

  const chooseGenotype = (color) => {
    switch (color) {
      case "bay":
        return bayArr;
      case "black":
        return blackArr;
      case "red":
        return redArr;
      default:
        return "Select a color first!";
    }
  };

  const baseColorsList = ["black", "bay", "red"];

  const selectColorHandle = (e, setColor, setHorse) => {
    setColor(e.target.value);
  };

  const HorseColorSelectForm = ({ name, setColor, color, horse, setHorse }) => (
    <Form>
      <h3> Select {name} </h3>
      <div className="row">
        <div className="col">
          <FormControl fullWidth={true}>
            <InputLabel id="color-label">Select Color</InputLabel>
            <Select
              labelId="select-color"
              id="select-color"
              value={color}
              onChange={(e) => selectColorHandle(e, setColor)}
              autoWidth={true}
            >
              <MenuItem value="" disabled>
                Choose a colour!
              </MenuItem>
              {baseColorsList.map((color) => (
                <MenuItem
                  onClick={() => setHorse(sample(chooseGenotype(color)))}
                  value={color}
                >
                  {color}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col">
          {color ? (
            <FormControl fullWidth={true}>
              <InputLabel id="gene-select-label">Refine Genotype</InputLabel>
              <Select
                labelId="select-genes"
                id="select-genes"
                value={JSON.stringify(horse)}
                onChange={(e) => setHorse(JSON.parse(e.target.value))}
                autoWidth={true}
              >
                <MenuItem value="" disabled>
                  Refine Genotype
                </MenuItem>
                <MenuItem
                  onClick={() => setHorse(sample(chooseGenotype(color)))}
                >
                  Randomize {color} genotype
                </MenuItem>

                {chooseGenotype(color).map((item, index) => (
                  <MenuItem value={JSON.stringify(item)}>
                    {item.Ag.join("")} {item.Ex.join("")}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <Alert severity="info"> Choose a color first!</Alert>
          )}
        </div>
      </div>
    </Form>
  );

  return (
    <Container>
      <Row>
        <Col>
          <HorseColorSelectForm
            horse={horse1}
            setHorse={setHorse1}
            setColor={setColorHorse1}
            color={colorHorse1}
            name="Horse 1"
          />
          {/* <HorseGeneForm horse={horse1} setHorse={setHorse1} name="Horse 1" /> */}
        </Col>
        <Col md={4}>{horse1 && <HorseItem horse={horse1} />}</Col>
      </Row>
      <Row>
        <Col>
          <HorseColorSelectForm
            horse={horse2}
            setHorse={setHorse2}
            setColor={setColorHorse2}
            color={colorHorse2}
            name="Horse 2"
          />
        </Col>
        <Col md={4}>{horse2 && <HorseItem horse={horse2} />}</Col>
      </Row>

      {/* <Button variant="outlined" onClick={() => allResults(horse1, horse2)}>
        Breed One!
      </Button> */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => allResults(horse1, horse2)}
      >
        Breed Results
      </Button>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => handleBreedOpen(horse1, horse2)}
      >
        Breed One
      </Button>
      <SimpleDialog
        open={breedDialogOpen}
        onClose={handleBreedClose}
        foal={currentFoal}
      />

      {console.log("current foal", currentFoal)}

      {tableRows && (
        <div>
          Possible Breed Results <br />
          Base Coats / Grey / Roan / Cream/Pearl / Dun / Choose Combo of 2
          Modifiers
          <Table>
            <tr>
              <td> </td>
              {agResult.map((ag) => (
                <th scope="col" className="geneTitle">
                  {ag}
                </th>
              ))}
            </tr>
            {tableRows.map((result, index) => (
              <tr>
                <th scope="row" className="geneTitleVertical">
                  {exResult[index]}
                </th>
                {result.map((horse, index) => (
                  <td>
                    <div>
                      <HorseItem horse={horse} key={index} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </Table>
        </div>
      )}
    </Container>
  );
};

export default IndexPage;

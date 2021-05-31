import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { RadialChart } from "react-vis";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import "react-vis/dist/style.css";

const useStyles = makeStyles(styles);

export default function TokenSection() {
  const classes = useStyles();
  const myData = [
    {
      angle: 1,
      label: "Super Custom label 1",
      subLabel: "With annotation 1",
      radius: 2,
      color: "red",
    },
    { angle: 5, label: "Super Custom label 2", subLabel: "With annotation 2" },
    { angle: 2, label: "Super Custom label 3", subLabel: "With annotation 3" },
  ];

  return (
    <div className={classes.section} id="tokenomics">
      <GridContainer justify="center" align="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Tokenomics</h2>
          <RadialChart
            data={myData}
            height={300}
            width={300}
            showLabels={true}
          />
          <h5 className={classes.description}>Notes</h5>
          <h5 className={classes.description}>Some details 1</h5>
          <h5 className={classes.description}>Some details 2</h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}

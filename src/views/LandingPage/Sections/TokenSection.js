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
      angle: 10,
      label: "Team and Developer",
      subLabel: "10%",
    },
    {
      angle: 10,
      label: "Promotion and Marketing",
      subLabel: "10%",
    },
    {
      angle: 10,
      label: "Future Partnerships",
      subLabel: "10%",
    },
    {
      angle: 15,
      label: "Reserved for further community rewards",
      subLabel: "15%",
    },
    {
      angle: 35,
      label: "Community AirDrops",
      subLabel: "35%",
    },
    {
      angle: 20,
      label: "Reserved for Quarterly Burning Events",
      subLabel: "20%",
    },
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

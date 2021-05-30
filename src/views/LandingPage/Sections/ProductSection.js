import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Fingerprint from "@material-ui/icons/Fingerprint";
import ExposureZeroIcon from "@material-ui/icons/ExposureZero";
import FlashOnIcon from "@material-ui/icons/FlashOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="our-mission">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Mission</h2>
          <h5 className={classes.description}>
            Our mission is to create a ZERO commission platform for
            crowd-sourcing. You can can get your work done fast through AI or in
            a distributed manner through crowd-sourcing. You can also do the
            work as per your skills and earn SINE.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="0 Commission"
              description="We won't charge a single penny for the work matched through our platform."
              icon={ExposureZeroIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Lightening Speed"
              description="Distributing your work over our network give us speed to get the work done quickly."
              icon={FlashOnIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fully Secure"
              description="Backed up by the security of blockchain and our algorithms, you get your work done securely and worker will get paid securely."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

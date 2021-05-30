/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { HashLink } from "react-router-hash-link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem
        className={classes.listItem}
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip
          id="header-our-mission"
          title="Our Mission"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="transparent" className={classes.navLink}>
            <HashLink
              to="/#our-mission"
              className={classes.dropdownLink}
              style={{
                fontSize: "18px",
                fontWeight: "500",
                fontFamily: `"Roboto Slab", "Times New Roman", serif`,
              }}
            >
              Mission
            </HashLink>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem
        className={classes.listItem}
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip
          id="header-tokenomics"
          title="Tokenomics"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="transparent" className={classes.navLink}>
            <HashLink
              to="/#tokenomics"
              className={classes.dropdownLink}
              style={{
                fontSize: "18px",
                fontWeight: "500",
                fontFamily: `"Roboto Slab", "Times New Roman", serif`,
              }}
            >
              Tokenomics
            </HashLink>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem
        className={classes.listItem}
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip
          id="header-roadmap"
          title="Roadmap"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="transparent" className={classes.navLink}>
            <HashLink
              to="/#roadmap"
              className={classes.dropdownLink}
              style={{
                fontSize: "18px",
                fontWeight: "500",
                fontFamily: `"Roboto Slab", "Times New Roman", serif`,
              }}
            >
              Roadmap
            </HashLink>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem
        className={classes.listItem}
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/SolAiNetwork"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem
        className={classes.listItem}
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip
          id="telegram-link"
          title="Join us on telegram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://t.me/SolAiNetwork"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-telegram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Sunburst, LabelSeries } from "react-vis";
import { EXTENDED_DISCRETE_COLOR_RANGE } from "react-vis/dist/theme";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import "react-vis/dist/style.css";

const useStyles = makeStyles(styles);

const myData = {
  name: "analytics",
  hex: EXTENDED_DISCRETE_COLOR_RANGE[0],
  children: [
    {
      name: "Team and Developer",
      value: 10,
      hex: EXTENDED_DISCRETE_COLOR_RANGE[0],
    },
    {
      name: "Promotion and Marketing",
      value: 10,
      hex: EXTENDED_DISCRETE_COLOR_RANGE[1],
    },
    {
      name: "Future Partnerships",
      value: 10,
      hex: EXTENDED_DISCRETE_COLOR_RANGE[2],
    },
    {
      name: "Community Distribution",
      hex: EXTENDED_DISCRETE_COLOR_RANGE[4],
      children: [
        {
          name: "Community AirDrops",
          value: 35,
          hex: EXTENDED_DISCRETE_COLOR_RANGE[5],
        },
        {
          name: "Reserved for future community rewards",
          value: 15,
          hex: EXTENDED_DISCRETE_COLOR_RANGE[3],
        },
      ],
    },
    {
      name: "Reserved for Quarterly Burning Events",
      value: 20,
      hex: EXTENDED_DISCRETE_COLOR_RANGE[6],
    },
  ],
};

const LABEL_STYLE = {
  fontSize: "8px",
  textAnchor: "middle",
};

/**
 * Recursively work backwards from highlighted node to find path of valud nodes
 * @param {Object} node - the current node being considered
 * @returns {Array} an array of strings describing the key route to the current node
 */
function getKeyPath(node) {
  if (!node.parent) {
    return ["root"];
  }

  return [(node.data && node.data.name) || node.name].concat(
    getKeyPath(node.parent)
  );
}

/**
 * Recursively modify data depending on whether or not each cell has been selected by the hover/highlight
 * @param {Object} data - the current node being considered
 * @param {Object|Boolean} keyPath - a map of keys that are in the highlight path
 * if this is false then all nodes are marked as selected
 * @returns {Object} Updated tree structure
 */
function updateData(data, keyPath) {
  if (data.children) {
    data.children.map((child) => updateData(child, keyPath));
  }
  // add a fill to all the uncolored cells
  if (!data.hex) {
    data.style = {
      fill: "#223F9A",
    };
  }
  data.style = {
    ...data.style,
    fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1,
  };

  return data;
}

const decoratedData = updateData(myData, false);

export default function TokenSection() {
  const classes = useStyles();

  const [pathValue, setPathValue] = React.useState(false);
  const [data, setData] = React.useState(decoratedData);
  const [finalValue, setFinalValue] = React.useState("SUNBRUST");

  return (
    <div className={classes.section} id="tokenomics">
      <GridContainer justify="center" align="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Tokenomics</h2>
          <Sunburst
            animation
            className="basic-sunburst-example"
            hideRootNode
            onValueMouseOver={(node) => {
              const path = getKeyPath(node).reverse();
              const pathAsMap = path.reduce((res, row) => {
                res[row] = true;
                return res;
              }, {});
              setFinalValue(path[path.length - 1]);
              setPathValue(path.join(" > "));
              setData(updateData(decoratedData, pathAsMap));
            }}
            onValueMouseOut={() => {
              setPathValue(false);
              setFinalValue(false);
              setData(updateData(decoratedData, false));
            }}
            style={{
              stroke: "#ddd",
              strokeOpacity: 0.3,
              strokeWidth: "0.5",
            }}
            colorType="literal"
            getSize={(d) => d.value}
            getColor={(d) => d.hex}
            data={data}
            height={300}
            width={350}
          >
            {finalValue && (
              <LabelSeries
                data={[{ x: 0, y: 0, label: finalValue, style: LABEL_STYLE }]}
              />
            )}
          </Sunburst>
          <h5 className={classes.description}>{pathValue}</h5>
          <h5 className={classes.description}>Notes</h5>
          <h5 className={classes.description}>Some details 1</h5>
          <h5 className={classes.description}>Some details 2</h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}

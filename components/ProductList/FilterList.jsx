import React, { Component } from "react";
import { Container, Paper } from "@material-ui/core";

import MenuList from "./MenuList";

class FilterList extends Component {
  render() {
    return (
      <>
        <div className="headerimg" />
        <div className="filtertab">
          <Container maxWidth="md">
            <Paper elevation="0">
              <MenuList name={"Catogary"} />
              <MenuList name={"Skin Type"} />
              <MenuList name={"Age Range"} />
              <MenuList name={"Price"} />
            </Paper>
          </Container>
        </div>
      </>
    );
  }
}

export default FilterList;

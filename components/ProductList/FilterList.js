import React, { Component } from "react";
import { Box, Container, Paper } from "@material-ui/core";

import MenuList from "./MenuList";

function FilterList({categories}){

    

    return (
      <>
        <div className="headerimg" />
        <div className="filtertab">
          <Container maxWidth="md">
            <Box>
              <MenuList name={"Catogary"} list={categories} />
              <MenuList name={"Skin Type"} list={categories}/>
              <MenuList name={"Age Range"} list={categories}/>
              <MenuList name={"Price"} list={categories}/>
            </Box>
          </Container>
        </div>
      </>
    );
  
}

export default FilterList;

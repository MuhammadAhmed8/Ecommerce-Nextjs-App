import React, { Component, useState } from "react";
import { Box, Container, Paper, Slider, Typography } from "@material-ui/core";

import MenuList from "./MenuList";

function FilterList({categories, ...props}){
    

    return (
      <>
        <div className="headerimg" />
        <div className="filtertab">
          <Container maxWidth="md">
            <Box>
              <MenuList name="Category" list={categories} filterField="slug" param="/category/"/>
              <MenuList name="Skin Type" list={[
                {
                  id: 1,
                  name: 'Type A',
                },
                {
                  id: 2,
                  name: 'Type B',
                }
              ]} 
              param="/products?attributes.Type=" 
              filterField="name"/>
            
              <MenuList name="Age" type="slider" value={[0,100]} label="yrs"/>
              <MenuList name="Price" list={categories} type="slider" 
              value={[0,500]} min={0} max={500} label='$' query={["price_from"],["price_to"]} />
            </Box>
          </Container>
        </div>
      </>
    );
  
}

export default FilterList;

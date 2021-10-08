import React, { Component, useState } from "react";
import { Box, Container, Paper, Slider, Typography } from "@material-ui/core";

import MenuList from "./MenuList";

function FilterList({categories, ...props}){
    

    return (
      <>
        <div className="headerimg" />
        <div className="filtertab" style={{background:"#fff", padding: '5px'}}>
          <Container>
            <Box style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
              <div>
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
            </div>
             <div style={{align:"right"}}>
             <MenuList name="Sort By" list={[
              {
                id: 1,
                name: 'Price'
              },
              {
                id: 2,
                name: 'Recent'
              },
              {
                id: 3,
                name: 'Popularity'
              }
              ]}/>

             </div>
              
            </Box>
          </Container>
        </div>
      </>
    );
  
}

export default FilterList;

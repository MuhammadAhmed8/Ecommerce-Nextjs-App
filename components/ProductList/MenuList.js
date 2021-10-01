import React, { Component, useEffect } from "react";
import { Button, Link, Menu, MenuItem, Slider } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { KeyboardArrowDown } from "@material-ui/icons";

function MenuList(props){

  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(props.value || null);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilter = (v) => {
    setValue(v)
    router.push(props.param + v)

  }

  const handleSlider = (e, v)=>{
    setValue(v);
  }

  return (
      <>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{marginRight:25}}
        >
          {props.name}

          <KeyboardArrowDown  style={{ marginLeft: '5px', fontSize: '1.2rem' }} />

        </Button>

        <Menu
          style={{ marginTop: "35px"}}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          
          {
            props.type === 'slider' ? 
            
            <MenuItem style={{width:250, padding:"35px 20px 0 20px"}}>
              
            <Slider
              value={value}
              valueLabelDisplay="on"
              onChange={handleSlider}
              aria-labelledby="range-slider"
              getAriaValueText={(value)=>`${value}${props.label}`}
              min={props.min}
              max={props.max}
            />
            </MenuItem>
            
            :
            props.list && props.list.map((item) => {
              return (
                  <MenuItem id={item.id} key={item.id} onClick={()=>handleFilter(item[props.filterField])}>
                    {item.name}
                    
                    </MenuItem>
              
              )
            })
          }
          
        </Menu>
      </>
    );
  
}

export default MenuList;

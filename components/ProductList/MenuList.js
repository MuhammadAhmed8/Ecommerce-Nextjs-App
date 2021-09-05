import React, { Component } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";

function MenuList(props){

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
      <>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{marginRight:25}}
        >
          {props.name}
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
            props.list.map((item) => {
              return <MenuItem id={item.id} key={item.id}>{item.name}</MenuItem>
            })
          }
          
        </Menu>
      </>
    );
  
}

export default MenuList;

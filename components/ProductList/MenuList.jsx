import React, { Component } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";

class MenuList extends Component {
  state = { anchorEl: null };
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    return (
      <>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.props.name}
        </Button>
        <Menu
          style={{ marginTop: "35px" }}
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem>1st Catogary</MenuItem>
          <MenuItem>2nd Catogary</MenuItem>
          <MenuItem>3rd Catogary</MenuItem>
          <MenuItem>4th Catogary</MenuItem>
        </Menu>
      </>
    );
  }
}

export default MenuList;

import React from 'react';
import {Autocomplete} from "@mui/material";


function DropDown(props) {
  return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={props.option}
    
    />
  )
}

export default DropDown;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// reactstrap components
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'


const AdminNavbar = (props) => {
  const [userid, setuserid] = useState("");
 

  const token = localStorage.getItem("token");
  console.log(token);

  const getUser = async () => {
    let result = await fetch("http://localhost:8000/getsession", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log('hi from profilename',result.User[0].username)
    setuserid(result.User[0].username)

   
  };
  useEffect(() => {
    getUser();
  }, [
    
  ]);
  

  return (
    <>
      <Navbar className="navbar-top navbar-dark"  expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          {/* <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form> */}
          {/* <Nav className="align-items-center d-none d-md-flex " navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0"  value={firmid} onClick={(e)=>{setfirmid(e.target.value)}} nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle"></span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-md font-weight-bold">
                      Company Switch
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" centre>
               

                {firmdata && firmdata.map((firm,index)=>{

                  return(
                    <DropdownItem to="/admin/user-profile" tag={Link} value={firm._id}>
                    <span style={{alignItems:"self-end" ,justifyContent:"flex-end" }}>{firm.firmname}</span>
                  </DropdownItem>
                    
                  )


                })}
               

                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02 text-yellow" />
                  <span>Add or manage company</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav> */}

 {/* <Box className="bg-white" sx={{ minWidth: 170 , color:"warning"}}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >Company Switch</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={firmid}
          label="Company Switch"
          onChange={(e)=>{setfirmid(e.target.value)}}
        >

          {firmdata  && firmdata.map((firm,index)=>{

            return(

              <MenuItem value={firm._id}>{firm.firmname}</MenuItem>
            )
          })}
         
          
        </Select>
      </FormControl>
    </Box>  */}

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center user-button">
                <Media className="ml-2 d-none d-lg-block">
                    <span className="fc-33 mb-0 mr-2 text-md font-weight-bold">
                      {userid}
                    </span>
                  </Media>
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("../../assets/img/theme/team-4-800x800.jpg")}
                    />
                  </span>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
               
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;

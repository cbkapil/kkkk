
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Carousel,
    CarouselItem,
    CarouselIndicators,
} from "reactstrap";


import {  useHistory } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import banner1 from "../../assets/img/brand/banner2.jpg"
import banner2 from "../../assets/img/brand/screen.png"

const Login = () => {
// Carousel image code

 // State for Active index
 const [activeIndex, setActiveIndex] = React.useState(0);

 // State for Animation
 const [animating, setAnimating] = React.useState(false);

 // Sample items for Carousel
 const items = [
     {src: banner1,
     },
     {src: banner2,
     }
 ];

 // Items array length
 const itemLength = items.length - 1

 // Previous button for Carousel
 const previousButton = () => {
     if (animating) return;
     const nextIndex = activeIndex === 0 ?
         itemLength : activeIndex - 1;
     setActiveIndex(nextIndex);
 }

 // Next button for Carousel
 const nextButton = () => {
     if (animating) return;
     const nextIndex = activeIndex === itemLength ?
         0 : activeIndex + 1;
     setActiveIndex(nextIndex);
 }

 // Carousel Item Data
 const carouselItemData = items.map((item) => {
     return (
         <CarouselItem
       
             key={item.src}
             onExited={() => setAnimating(false)}
             onExiting={() => setAnimating(true)}
         >
             <img src={item.src}  className="banner-img" alt={item.altText}  />
         </CarouselItem>
     );
 });


// Carousel image code



  const [username,setusername]=useState('')
  const[password,setpassword]=useState('')

  const history = useHistory();
  const failure=()=>{toast.error('🦄 Incorrect Login Details !!!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });}
  const success = () => {toast.success('Login Successfull !!!!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });};

  const submit = async (e) => {
    e.preventDefault();

    if (!username) {
      alert("Please Enter email");
      return;
    }

    if (!password) {
      alert("Please Enter Password");
      return;
    }

    let result = await fetch("http://localhost:8000/login", {
      method: "post",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.status) {
     success();
      const token = result.token;
      console.log("hello", token);
      localStorage.setItem("token", token);
      // setCurrentUser({
      //   name: result.name,
      //   id: result._id,
      // });
      setTimeout(()=>{ history.push("/admin/index")},2000)
    } else {
    failure();
    }
  };
  return (
    <>
      <div className="logincontainer">
      <div className="login-card" >
        
        <div className="logincard-header">
          <h2>Login</h2>
        </div>
        <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="text"
                    autoComplete="new-email"
                    onChange={(e)=>{setusername(e.target.value)}}
                    value={username}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e)=>{setpassword(e.target.value)}}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="add-company-btn mb-2 mt-2" type="button" onClick={submit}>
                  Sign in
                </Button>
              </div>
        </Form>
        <a
          className="text-light"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <small>Forgot password? </small>
        </a>
        <a
          className="text-light"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <small >Create new account</small>
        </a>
      </div>


      <div className="carousel-card">
            <Carousel previous={previousButton} next={nextButton} 
                activeIndex={activeIndex}>
                <CarouselIndicators items={items} 
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
            </Carousel>
        </div>



      </div>

      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      
    </>
     
  );
};

export default Login;

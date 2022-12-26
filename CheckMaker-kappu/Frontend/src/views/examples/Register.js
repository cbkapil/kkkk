import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Carousel,
    CarouselItem,
    CarouselIndicators,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  useHistory } from "react-router-dom";
import React, { useState } from "react";

import banner1 from "../../assets/img/brand/banner2.jpg"
import banner2 from "../../assets/img/brand/screen.png"

const Register = () => {
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setpassword] = useState("");

  
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
             <img src={item.src} className="banner-img" alt={item.altText}  />
         </CarouselItem>
     );
 });


// Carousel image code

const failure=()=>{toast.error('🦄 Email Already Exists !!!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });}
const success = () => {toast.success('Registered Successfully !!!!', {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });};

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    console.log(username)
   
    console.log("register");

    if (!username) {
      alert("Please Enter name");
      return;
    }
    if (!email) {
      alert("Please Enter email");
      return;
    }

    if (!password) {
      alert("Please Enter Password");
      return;
    }
    if (!mobile) {
      alert("Please Enter mobile No.");
      return;
    }
   

    let result = await fetch("http://localhost:8000/register", {
      method: "post",
      body:JSON.stringify( { username, email, password, mobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result)
    if (result.status) {
      success()
      setTimeout(()=>{ history.push("/auth/login")},2000)
    } else if (!result.status) {
      failure()
    } else {
      console.warn("error");
    }

    console.warn(result);
  };
  return (
    <>
      <div className="logincontainer">

        <div className="login-card">
      
        <div className="logincard-header">
          <h2>Signup</h2>
        </div>

        <Form role="form">
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-hat-3" />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Name" type="text"  value={username}  onChange={(e)=>{setuserName(e.target.value)}}/>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup className="input-group-alternative ">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-email-83" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Email"
              type="email"
              autoComplete="new-email"

              value={email}  onChange={(e)=>{setEmail(e.target.value)}}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup className="input-group-alternative ">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-mobile-button" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Mobile"
              type="number"
              autoComplete="new-mobile"

              value={mobile}  onChange={(e)=>{setMobile(e.target.value)}}
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

              value={password}  onChange={(e)=>{setpassword(e.target.value)}}
            />
          </InputGroup>
        </FormGroup>
      
        <div className="text-center">
            <Button className="add-company-btn mb-2 mt-2" type="button" onClick={submit}>
              Create account
            </Button>
          </div>
        </Form> 
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

export default Register;



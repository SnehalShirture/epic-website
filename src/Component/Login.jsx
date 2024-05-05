import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../utils";
import { login } from "../reduxwork/UserSlice";
import fitnessvdeo from "../Images/fitness.mp4";
import logo from "../Images/epic logo.png";
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import "../App.scss";
function Login() {
  const dispatcher = useDispatch();
  const [Email, setEmail] = useState("");
  const [EmailPassword, setEmailPassword] = useState("");
  const navi = useNavigate();

  const addlogin = () => {
    const logindata = {
      Email: Email,
      EmailPassword: EmailPassword,
    };
    axios
      .post(API_URL + "dologin", logindata)
      .then((result) => {
        console.log("DATA", result.data);
        if (result.data.success) {
          dispatcher(login(result.data.data));
          navi("/services");
        } else {
          alert("Login Fail");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-container">
      <div className="wrapper">
        <div className="video-container">
          <video src={fitnessvdeo} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">
              Step into Your Epic <br />
              Journey!{" "}
            </h2>
            <p>Elevate Your Workout, Embrace Your Groove! </p>
          </div>
          <div className="footerDiv flex">
            <span className="text"> Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Register</button>
            </Link>
          </div>
        </div>

        <div className="login-container">
          <img src={logo} alt="Logo Image"></img>
          <h3>Welcome Back !</h3>
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="username">User Email</label>
              <div className="input_flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  className="logininput"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Login Password</label>
              <div className="input_flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  className="logininput"
                  placeholder="Enter Password"
                  onChange={(e) => setEmailPassword(e.target.value)}
                />
              </div>
              
            </div>
          </form>
          <button className="btn">
                <span onClick={() => addlogin()}>Login</span>
                <AiOutlineSwapRight className="icon" />
              </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Form, useNavigate } from "react-router-dom";
// import { API_URL } from "../utils";
// import { Button, Container, Row } from "react-bootstrap";
// import axios from "axios";
// import { login } from "../reduxwork/UserSlice";

// const Login = () => {
// const dispatcher = useDispatch();
// const [Email, setEmail] = useState("");
// const [EmailPassword, setEmailPassword] = useState("");
// const navi = useNavigate();

// const addlogin = () => {
//   const logindata = {
//     Email: Email,
//     EmailPassword: EmailPassword,
//   };
//   axios
//     .post(API_URL + "dologin" ,logindata)
//     .then((result) => {
//       console.log("DATA", result.data);
//       if (result.data.success) {
//         dispatcher(login(result.data.data))
//         //alert("Login Successfully");
//         navi("/services");
//       } else {
//         alert("Login Fail");
//       }
//       //window.location.reload(false);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
//   return (
//    <div>
//     <Container>
//       <Row>
//         <Form
//       </Row>
//     </Container>

//    </div>
//   );
// };

// export default Login;

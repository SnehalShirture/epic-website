import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  NavLink,
  Navbar,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../navbar.css";
import axios from "axios";

import { register } from "../reduxwork/UserSlice";
import { useDispatch } from "react-redux";
import { API_URL } from "../utils";

function Register () {
  const dispatcher = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [EmailPassword, setEmailPassword] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Address, setAddress] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [showmodel, setshowmodel] = useState(false);
  const navi=useNavigate()
  useEffect (() =>{
    setshowmodel(true)
  },[])
  const submitform = () => {
    const UserData = {
      Name: Name,
      Email: Email,
      EmailPassword: EmailPassword,
      MobileNo: MobileNo,
      Address: Address,
      Occupation: Occupation,
    };
    axios
      .post(API_URL + "adduser", UserData)
      .then((result) => {
        setshowmodel(false);
        // alert("User Added");
        console.log("Data", result.data);
        dispatcher(register(result.data));
        navi("/login")
        // window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      

      <Modal
        className=" p-5 "
        show={showmodel}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setshowmodel(false)}
      >
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title className="text-light ">Registration</Modal.Title>
        </Modal.Header>

        <Container className="p-5 w-100 bg-white">
          <Row>
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="p-1"> Name </Form.Label>
                    <Form.Control
                      text="text"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="p-1">MobileNo</Form.Label>
                    <Form.Control
                      text="text"
                      placeholder="MobileNo"
                      onChange={(e) => setMobileNo(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label className="p-1">Email</Form.Label>
                      <Form.Control
                        text="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="p-1">Password</Form.Label>
                      <Form.Control
                        text="text"
                        placeholder="Password"
                        onChange={(e) => setEmailPassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label className="p-1">Address</Form.Label>
                    <Form.Control
                      text="text"
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="p-1">Occupation</Form.Label>
                    <Form.Control
                      text="text-area"
                      placeholder="Occupation"
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <div className="mt-4">
                  <Button
                    variant="danger"
                    className="me-3 w-25"
                    onClick={() => setshowmodel(false)}
                  >
                    Close
                  </Button>
                  <Button
                    className="w-25"
                    onClick={() => submitform()}
                    variant="primary"
                  >
                    Submit
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};

export default Register;

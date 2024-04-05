import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import logo from "./Images/epic logo.png";
import profilepic from "./Images/Profile.webp";
import "./navbar.css";
import axios from "axios";
import { API_URL } from "./utils";
import { register } from "./reduxwork/UserSlice";
import { useDispatch } from "react-redux";

function MyNavbar() {
  const dispatcher = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Address, setAddress] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [showmodel, setshowmodel] = useState(false);
  const submitform = () => {
    const UserData = {
      Name: Name,
      Email: Email,
      MobileNo: MobileNo,
      Address: Address,
      Occupation: Occupation,
    };
    axios
      .post(API_URL + "adduser", UserData)
      .then((result) => {
        alert("User Added");
        console.log("Data", result.data);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar className="nav" collapseOnSelect variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" src={logo}></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle arial-control="responsive-nav-bar" />
        <Navbar.Collapse id="responsive-nav-bar">
          <Nav className="ms-auto navlinks">
            <Nav.Link></Nav.Link>
            <Nav.Link>
              <Link className="menu" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="menu" to="/team">
                Team
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="menu" to="/batches">
                Batches
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="menu" to="/services">
                Services
              </Link>
            </Nav.Link>
          </Nav>
          <Link>
            <img
              onClick={() => setshowmodel(true)}
              className="profilelogo"
              src={profilepic}
            ></img>
          </Link>
        </Navbar.Collapse>
      </Navbar>

        <Modal className=" p-5 " show={showmodel} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered onHide={() => setshowmodel(false)}  >
        <Modal.Header closeButton className="bg-dark" >
          <Modal.Title className="text-light ">Registration</Modal.Title>
        </Modal.Header>

        <Container className="p-5 w-100 bg-white">
          <Row>
            <Form >
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
                    <Form.Label className="p-1">Email</Form.Label>
                    <Form.Control
                      text="text"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
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
              </Row>
              <Form.Group>
                <Form.Label className="p-1">Occupation</Form.Label>
                <Form.Control
                  text="text-area"
                  placeholder="Occupation"
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
              <div className="mt-4">
                <Button variant="danger" className="me-3 w-25" onClick={() => setshowmodel(false)}>
                  Close
                </Button>
                <Button className="w-25" onClick={() => submitform()} variant="primary">
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
}

export default MyNavbar;

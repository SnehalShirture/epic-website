import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./plancrd.css";
import logo from "../Images/epic logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PlansCard = ({ plans, logedIn }) => {
  const redirectPath = (plamItem) => {
    logedIn ? navi("/selectyourbatch", { state: plamItem }) : navi("/login");
  };
  const navi = useNavigate();
  return (
    <>
      <Row>
        {plans.map((plamItem, index) => {
          return (
            <Col key={index} sm={12} md={6} lg={3}>
              <Card
                className="plancrd"
                key={plamItem._id}
                style={{ width: "18rem", marginBottom: "10px" }}
              >
                <Card.Body className="plancrd">
                  <img className="logoimg" src={logo}></img>
                  <Card.Title>{plamItem.PlanName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Duration: {plamItem.Duration}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Week-Days:</strong> {plamItem.WeekDays}
                    <br />
                    <strong>Sessions:</strong> {plamItem.Sessions}
                    <br />
                    <strong>Amount:</strong> {plamItem.Amount}
                    <br />
                    <strong>Discounted Amount:</strong> {plamItem.Discount}
                  </Card.Text>
                  <Button
                    class=" btn btn-info"
                    onClick={() => {
                      redirectPath(plamItem);
                    }}
                  >
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default PlansCard;

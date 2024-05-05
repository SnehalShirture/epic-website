import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../utils";
import { Container, Tab, Tabs } from "react-bootstrap";
import PlansCard from "./PlansCard";
import { useSelector } from "react-redux";
import { IoIosLogIn } from "react-icons/io";

function Services() {
  const [AllPlanData, setAllPlanData] = useState([]);
  const { IsLogin } = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get(API_URL + "getallPlan")
      .then((result) => {
        console.log("Plan", result.data);
        setAllPlanData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <Tabs
          defaultActiveKey={0}
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          {AllPlanData.map((plans, index) => {
            return (
              <Tab key={index} eventKey={index} title={plans._id}>
                <Container>
                  <PlansCard logedIn={IsLogin} plans={plans.plam} />
                </Container>
              </Tab>
            );
          })}
          {console.log(IsLogin)}
        </Tabs>
      </div>
    </>
  );
}

export default Services;

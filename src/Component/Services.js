import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../utils";
import { Container, Tab, Tabs } from "react-bootstrap";
import PlansCard from "./PlansCard";

function Services() {
  const [AllPlanData, setAllPlanData] = useState([]);

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
                  <PlansCard plans={plans.plam}  />
                </Container>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </>
  );
}

export default Services;

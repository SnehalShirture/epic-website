import React, { useEffect, useState } from "react";
import { API_URL } from "../utils";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function TakeAdmission() {
  // const [users, setUsers] = useState([]);
  const [UserId, setUserId] = useState([]);
  const [BatchId, setBatchId] = useState([]);
  const [TrainerId, setTrainer] = useState([]);
  const [PlanId, setPlanId] = useState([]);

  const [StartDate, setStartDate] = useState("");
  const [PaymentAmount, setPaymentAmount] = useState("");
  const [PaymentStatus, setPaymentStatus] = useState("");
  const [PaymentType, setPaymentType] = useState("");
  const {UserData} = useSelector((state) => state.user);
  const { state } = useLocation();

  const submitForm = () => {
    const admission = {
      UserId: UserId,
      BatchId: BatchId,
      TrainerId: TrainerId,
      PlanId: PlanId,
      StartDate: StartDate,
      PaymentAmount: PaymentAmount,
      PaymentStatus: PaymentStatus,
      PaymentType: PaymentType,
    };
    axios
      .post(API_URL + "addAdmission", admission)
      .then((result) => {
        alert("Admission Done");
        console.log("Data", result.data);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(UserData)
    axios
      .post(API_URL + "getuserbyid" , {
        _id:UserData._id
      })
      .then((result) => {
        console.log("Users", result);
        setUserId(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(API_URL + "getallbatches")
      .then((result) => {
        console.log("Batches", result.data);
        setBatchId(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(API_URL + "getalltrainer")
      .then((result) => {
        console.log("Trainer", result.data);
        setTrainer(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control 
            type="text"
            value={UserId.data.Name} 
            
          >
            
          </Form.Control>
          {console.log(UserId)}
          <Form.Label>Batch Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setBatchId(e.target.value)}
            value={state?.Batch.BatchName} 
          />

          <Form.Label>Trainer Name </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTrainer(e.target.value)}
            value={state?.Batch.TrainerId.Name || ""}
          ></Form.Control>

          <Form.Label>Plan Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPlanId(e.target.value)}
            value={state?.Plan.PlanName || ""}
          ></Form.Control>

          <Form.Label>Select Date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            value={StartDate}
          ></Form.Control>

          <Form.Label>Plan Amount </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPaymentAmount(e.target.value)}
            value={state?.Plan.Amount || ""}
          ></Form.Control>

          <Form.Label>Payment Status</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Succesful">Succesful</option>
          </Form.Control>

          <Form.Label>Payment Type</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </Form.Control>
          <Button onClick={()=>submitForm()}>Make Payment </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default TakeAdmission;

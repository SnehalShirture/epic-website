import axios from 'axios';
import React, { useState } from 'react'
import { API_URL } from '../utils';
import { Form} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const TakeAdmisssion = () => {
  const [UserId, setUserId] = useState("");
  const [BatchId, setBatchId] = useState("");
  const [PlanId, setPlanId] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [PaymentAmount, setPaymentAmount] = useState("");
  const [PaymentStatus, setPaymentStatus] = useState("");
  const [PaymentType, setPaymentType] = useState("");

  const submitform = ()=>{
    const Admission = {
      UserId:UserId,
      BatchId:BatchId,
      PlanId:PlanId,
      StartDate:StartDate,
      PaymentAmount:PaymentAmount,
      PaymentStatus:PaymentStatus,
      PaymentType:PaymentType
    }
    axios.post (API_URL + "addAdmission" , Admission)
    .then((result) => {
      alert ("Admission Done")
      console.log("Data",result.data);
      window.location.reload(false)
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <div>
      
    </div>
  )
}

export default TakeAdmisssion


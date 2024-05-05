import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import "./Batches.css"
import { API_URL } from '../utils';
import { useLocation, useNavigate } from 'react-router-dom';

function Batches() {
  const { state } = useLocation();

    const [BatchData, setBatchData] = useState([]);
    const navi = useNavigate();

    useEffect(() => {
        axios
          .get(API_URL+"getallbatches")
          .then((result) => {
            console.log("Batch", result.data);
            setBatchData(result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    
  return (
    <div className="table layout">
    <Table style={{ width: "1550px" }} striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>From time</th>
          <th>To-time</th>
          <th>Batch Name</th>
          <th>Trainer Name</th>
        </tr>
      </thead>
      <tbody>
        {BatchData.map((Batch, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Batch.Fromtime}</td>
            <td>{Batch.Totime}</td>
            <td>{Batch.BatchName}</td>
            <td>{Batch.TrainerId.Name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
   
  </div>
  )
}

export default Batches

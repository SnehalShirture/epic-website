import React, { useEffect, useState } from "react";

import axios from "axios";

import { FaInstagramSquare, FaFacebook,  FaYoutube } from "react-icons/fa";
import "./Team.css";
import { API_URL } from "../utils";
const Team = () => {
  const [TrainerData, setTrainerData] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL+"getalltrainer")
      .then((result) => {
        console.log("Trainer", result.data);
        setTrainerData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="sawp-container layout">
      {TrainerData.map((Trainer) => {
        return (
          <div className="swap-card">
            <div className="swap-card-container">
              <div className="card-face front-face">
                <img
                  src={`http://localhost:5000${Trainer.TrainerPhoto}`}
                  alt={Trainer.Name}
                  className="trainer-image"
                />
                <h2>{Trainer.Name}</h2>
              </div>
              <div className="card-face back-face">
                <div className="swap-card-about">
                  <h2>About Me</h2>
                  <p>{Trainer.Description}</p>
                  <p>{Trainer.Certification}</p>
                  <p>{Trainer.Email}</p>
                  <p>{Trainer.MobileNo}</p>
                  <div className="row-about">
                      <a href={Trainer.InstagramUrl} target="_blank" className="ig">
                        <FaInstagramSquare />
                      </a>
                      <a href={Trainer.FacebookUrl} target="_blank"  className="fb">
                        <FaFacebook />
                      </a>
                      <a href={Trainer.YoutubeUrl} target="_blank"  className="yt">
                        <FaYoutube />
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team;

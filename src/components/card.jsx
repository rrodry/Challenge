import "./card.css";
import { connSubmitApplication } from "../middlewares/conn";
import { useState } from "react";

export const Cards = ({ jobId, title, candidateData }) => {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = () => {
    connSubmitApplication(jobId, candidateData, repoUrl).then((response) => {
      console.log("Application submitted successfully:", response.json());
    });

    setRepoUrl("");
  };

  return (
    <div className="dvCard">
      <div className="dvCardTitle">
        <h3>{title}</h3>
      </div>
      <div className="dvCardContent">
        <input
          type="text"
          placeholder="Github"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
};

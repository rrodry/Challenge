import "./card.css";
import { connSubmitApplication } from "../middlewares/conn";
import { useState } from "react";

export const Cards = ({ jobId, title, candidateData }) => {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = () => {
    connSubmitApplication(jobId, candidateData, repoUrl)
      .then(() => {
        alert("Aplicación enviada con éxito");
      })
      .catch((error) => {
        alert("Error al enviar la aplicación");
        console.error("Error submitting application:", error);
      });
    setRepoUrl("");
  };

  return (
    <div className="dvCard">
      <div className="dvCardTitle">
        <h3>{title}</h3>
      </div>
      <div className="dvCardContent">
        <small className="SpObligatory">*Obligatorio</small>
        <input
          type="text"
          placeholder="Github"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          className="inputGit"
        />
        <button
          type="button"
          disabled={repoUrl === ""}
          className={repoUrl != "" ? "SubbmitButton" : "SubbmitButtonDisabled"}
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

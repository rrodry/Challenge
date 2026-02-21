import { useEffect, useState } from "react";
import { connDataCandidate, connDataJobList } from "./middlewares/conn";
import { Cards } from "./components/card";

import "./App.css";

function App() {
  const [candidateData, setCandidateData] = useState(null);
  const [jobListData, setJobListData] = useState(null);

  useEffect(() => {
    connDataCandidate().then((data) => {
      setCandidateData(data);
      console.log(data);
    });
    connDataJobList().then((data) => {
      setJobListData(data);
    });
  }, []);
  return (
    <>
      <div className="dvTitleMain">
        <h1>Challenge - Job List</h1>
      </div>
      <div className="dvContentMain">
        {jobListData &&
          jobListData.map((job) => (
            <Cards
              key={job.id}
              jobId={job.id}
              title={job.title}
              candidateData={candidateData}
            ></Cards>
          ))}
      </div>
    </>
  );
}

export default App;

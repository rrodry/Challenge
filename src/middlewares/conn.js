import axios from "axios";

const BASE_URL =
  "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";
const EMAIL = "rodrigorimbau94@gmail.com";

export const connDataCandidate = async () => {
  const GET_CANDIDATE = `${BASE_URL}/api/candidate/get-by-email?email=${EMAIL}`;
  try {
    const response = await axios.get(GET_CANDIDATE, {});
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const connDataJobList = async () => {
  const GET_JOB_LIST = `${BASE_URL}/api/jobs/get-list`;
  try {
    const response = await axios.get(GET_JOB_LIST, {});
    return response.data;
  } catch (error) {
    console.error("Error fetching job list data:", error);
    throw error;
  }
};
export const connSubmitApplication = async (jobId, candidateData, repoUrl) => {
  try {
    const POST_APPLICATION = `${BASE_URL}/api/candidate/apply-to-job`;

    const payload = {
      uuid: candidateData.uuid,
      jobId: jobId,
      applicationId: candidateData.applicationId,
      candidateId: candidateData.candidateId,
      repoUrl: repoUrl,
    };
    const response = await axios.post(POST_APPLICATION, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting application:", error);
    throw error;
  }
};

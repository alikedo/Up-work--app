import axios from "axios";
 
const api = axios.create({

  baseURL: "http://localhost:5005/api"
  // withCredentials: true // => you might need this option if using cookies and sessions
});
 
const errorHandler = (err) => {
  throw err;
};
 
const getCandidate = () => {
  return api.get("/candidate")
    .then((res) => res.data)
    .catch(errorHandler);
};
 
const uploadImage = (file) => {
  return api.post("/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};
 
const createCandidate = (newCandidate) => {
  return api.post("/candidate", newCandidate)
    .then(res => res.data)
    .catch(errorHandler);
};
 
export default {
  getCandidate,
  uploadImage,
  createCandidate
};
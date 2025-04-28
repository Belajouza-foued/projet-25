import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5030/api",
  headers: {
    "Content-type": "application/json"
  }
});
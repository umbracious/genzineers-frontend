import axios from "axios";

axios.defaults.baseURL = "http://localhost:6868";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  response => response,
  error => {

    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error response:', error.response);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something else happened
      console.error('Error message:', error.message);
    }

    return Promise.reject(error);

  }

);

export default axios;
import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";

const AxiosInstance = axios.create({
  baseURL: "http://172.17.0.78:4000/api/v1/",
});

AxiosInstance.interceptors.request.use(
  (config: any) => {
    // Add a token to the request headers
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Handle form data
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response: any) => {
    // If the response was successful, just return the data
    return response.data;
  },
  (error: any) => {
    console.log("Error", error);

    if (!error.response) {
      if (error.code === "ECONNABORTED") {
        // Handle timeout errors
        console.error("Timeout error", error.message);
      } else {
        // Handle network errors
        console.error("Network error", error.message);
      }
    } else {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      switch (error.response.status) {
        case 400:
          // Handle bad request
          console.error("Bad request", error.response.data);
          break;
        case 401:
          console.log("401 error", error.response.data);
          localStorage.clear();
          const navigate = useNavigate();
          navigate("/login");
          break;
        case 403:
          // Handle forbidden
          console.error("Access denied", error.response.data);
          break;
        case 404:
          // Handle not found
          console.error("Not found", error.response.data);
          break;
        case 500:
          // Handle server error
          console.error("Server error", error.response.data);
          break;
        default:
          // Handle other errors
          console.error("Error", error.response.data);
      }
    }

    // Always reject the Promise so the error can be handled in the catch block
    return Promise.reject(error?.response?.data);
  }
);

AxiosInstance.defaults.timeout = 7000;

export default AxiosInstance;

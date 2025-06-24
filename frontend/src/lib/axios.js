import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"; // Adjust the base URL based on the environment
const api = axios.create({ 

    baseURL: BASE_URL,
})

export default api;
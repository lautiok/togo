import axios from "axios";

const url = import.meta.env.VITE_API_URL || "http://localhost:8080"

const instance = axios.create({
    baseURL: `${url}/api/`,
    withCredentials: true
});

export default instance;

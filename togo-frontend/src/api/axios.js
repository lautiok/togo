import axios from "axios";

const url = import.meta.env.VITE_API_URL

const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Access-Control-Allow-Credentials": "true"
    },
    params: {
        api_key: import.meta.env.VITE_API_KEY
    },
    timeout: 10000,
    validateStatus: function (status) {
        return status < 500;
    },
    transformResponse: [function (data) {
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch (e) {
            console.log(e);
        }
    }
    return data;
    }]
});

export default instance;
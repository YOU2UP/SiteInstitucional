import axios from "axios";

const api = axios.create({
    baseURL: "http://54.83.119.60:8080"
})

export default api;
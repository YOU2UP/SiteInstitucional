import axios from "axios";

const api = axios.create({
    baseURL: "http://54.146.67.106:8080"
})

export default api;
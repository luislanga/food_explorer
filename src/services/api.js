import axios from "axios"

export const api = axios.create({
    baseURL: "https://foodexplorer-api-nri5.onrender.com"
    // baseURL: "http://localhost:3333"
})
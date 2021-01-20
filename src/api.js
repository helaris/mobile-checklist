import axios from "axios";

const instance = axios.create({
  baseURL: "https://rocky-springs-71137.herokuapp.com/",
})

export default instance;
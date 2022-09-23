import axios from "axios";

export const api = axios.create({
  baseURL: "https://rnotes-api.herokuapp.com",
});

import axios from "axios";

export default axios.create({
  baseURL: "http://52.87.243.146:3211/shethink/v1",
  headers: { Accept: "application/json" },
});

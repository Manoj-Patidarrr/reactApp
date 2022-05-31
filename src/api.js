import axios from "axios";

export default axios.create({
  baseURL: "http://3.91.205.100:3211/shethink/v1",
  headers: { Accept: "application/json" },
});

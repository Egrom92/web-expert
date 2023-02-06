import HttpClient from "./HttpClient";

const hc = new HttpClient({
  protocol: "https",
  host: "jsonplaceholder.typicode.com",
  port: "",
  url: "/",
  query: {}
});

export default hc;
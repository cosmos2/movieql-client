import ApolloCient from "apollo-boost";

// local test server
const client = new ApolloCient({
  uri: "http://localhost:4000/"
});

export default client;

import axios from "axios";

export default axios.create({
  baseURL: "https://87a1-202-173-127-173.in.ngrok.io",
});

// first expo start
// then, npm run db in json we created earlier
// then, go into ngrok on desktop
// and type ngrok http port number displayed in 2nd step
// everytime u do this paste the link genetrated from ngrok in baseURL*************

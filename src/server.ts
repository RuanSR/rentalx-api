import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Server On!" });
});

app.listen(8888, () => console.log("Server on!"));

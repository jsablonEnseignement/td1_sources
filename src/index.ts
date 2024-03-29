import express from "express";

const hostname = "127.0.0.1";
const port = 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello !");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
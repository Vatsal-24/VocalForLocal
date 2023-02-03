const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");
const postRouter = require("./routes/postRoute");

dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.static(`${__dirname}`));
app.get("/", (req, res) => {
  return res.json({ status: "Up and running" });
});
app.use(cors({ credentials: true }));

app.use(express.json());

app.use("/api/v1/post", postRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server started listening!")
);

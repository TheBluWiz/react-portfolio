const express = require("express");
const path = require("path");
require("dotenv").config();
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`Now listening at http://localhost:${PORT}`)
})
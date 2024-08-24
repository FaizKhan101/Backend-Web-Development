const express = require("express");
const bodyParser = require("body-parser");

const restaurantsRoutes = require("./routes/restaurants");
const db = require("./data/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(restaurantsRoutes);

db.mongoConnect(() => {
  app.listen(3000, () => console.log("Server start at port:3000"));
});

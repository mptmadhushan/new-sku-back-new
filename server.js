const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
path = require("path");
const app = express();
var corsOptions = {
  // origin: "http://localhost:3200",
};
global.__basedir = __dirname;
app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/uploads")));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to new-sku application." });
});

require("./app/routes/category.routes")(app);
require("./app/routes/subCategory.routes")(app);
require("./app/routes/products.routes")(app);
require("./app/routes/insight.routes")(app);
// set port, listen for requests
app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});

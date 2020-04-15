const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("dist"));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/routes")(app);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on ${process.env.PORT || 8080}!`)
);

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const climbRouter = require("./routes/Climbs");
app.use("/climbs", climbRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server started");
  });
});

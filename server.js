const express =  require("express");
const app = express();
const mongodb = require("./config/db")
require("dotenv").config();

const user = require("./routes/user")
app.use("/user" ,user )


app.use(express.json());


mongodb();
app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
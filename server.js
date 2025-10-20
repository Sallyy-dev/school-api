const express =  require("express");
const app = express();
const mongodb = require("./config/db")
require("dotenv").config();

const user = require("./routes/user")
app.use("/user" ,user )


app.use(express.json());


mongodb();
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
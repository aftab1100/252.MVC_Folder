const express = require("express");
const app = express();
const env = require("dotenv");
const { adminRoute } = require("./src/routes/admin/adminRoute");
env.config();


app.use(adminRoute);

let PORT = process.env.PORTNO;
app.listen(PORT, () => {
  console.log(`listening on port `, PORT);
});

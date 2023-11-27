const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// const DB = process.env.DATABASE;
// 8gZ61keZXKHEDKQw
const DB =
  "mongodb+srv://muhammadammarmubashir:8gZ61keZXKHEDKQw@cluster0.wlzikoh.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then((con) => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log("DB CONNECTION ERROR!");
    console.log(err);
  });
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App running on port 8000...");
});

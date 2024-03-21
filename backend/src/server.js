const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, "../../.env")
});

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

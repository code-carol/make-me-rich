const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/userModel");
dotenv.config({
  path: "/Users/carolineveloso/Desktop/make-me-rich/backend/src/.env",
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

// const newUser = new User({
//   name: "Silviane",
//   email: "lalala@eamil.com",
//   password: "password",
//   income: 1000
// });

// newUser.save();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

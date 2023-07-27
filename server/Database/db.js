const autoIncrement = require('mongoose-auto-increment');

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/employemanagment", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
console.log("hello");
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/employemanagment');


module.exports = {

};
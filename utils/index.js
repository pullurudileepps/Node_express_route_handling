const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pulluru_dileep_1729:syDBLMxnrIks3NwC@cluster.idkuw6p.mongodb.net/?appName=Cluster",
  {}
);
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection to MongoDB is successful");
});
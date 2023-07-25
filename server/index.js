const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const messageRoute = require("./routes/messageRoute");
require("dotenv").config();

const App = express();

App.use(express.json());
App.use(cors());
App.use("/api/users", userRoute);
App.use("/api/chats", chatRoute);
App.use("/api/messages", messageRoute);

App.get("/", (req, res) => {
  res.send("Welcome to our Live Chat App...");
});

const port = process.env.PORT || 5000;

App.listen(port, (req, res) => {
  console.log(`Your server running on port...: ${port}`);
});

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connection Established"))
  .catch((error) => console.log("MongoDB Connection Failed: ", error.message));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/simpleNotes")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// routes
const noteRoutes = require("./routes/noteRoutes");
app.use("/api/notes", noteRoutes);

// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
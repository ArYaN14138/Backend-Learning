const express = require("express");
const Note = require("../models/Notes");

const router = express.Router();

// CREATE note
router.post("/", async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
});

// GET all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

module.exports = router;
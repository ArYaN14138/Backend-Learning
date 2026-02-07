const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  try {
    const note = await noteModel.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/notes",async(req,res)=>{
    const notes=await noteModel.find();
    res.status(200).json({
        notes:notes
    });

})


app.delete("/notes/:id",async(req,res)=>{
    const id =req.params.id;
    await noteModel.findByIdAndDelete({
        _id:id//ye id ke basis par note ko delete karne ke liye findByIdAndDelete method ka use karte hai

    })
    
    res.status(200).json({
        message:"Note deleted successfully"
    })
})


app.patch("/notes/:id",async(req,res)=>{
    const id=req.params.id;
    const description=req.body.description;
    
   await noteModel.findByIdAndUpdate({
        _id:id,
        description:description
    })

    res.status(200).json({
        message:"Note updated successfully",
       // note:UpdatedNote//ye updated note hai jo ki update hone ke baad ka note hai
    })
})




module.exports = app;
import Notes from "../models/note.model.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find({ user : req.user.id }).populate("user");
    res.json(notes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getNote = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id).populate("user");
    if (!note) return res.status(404).json({ message: "Note not found" });
    return res.json(note);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, description} = req.body;
    const newNote = new Notes({
      title,
      description,
      user: req.user.id,
    });
    await newNote.save();
    res.json(newNote);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const updateNote = async (req, res) => {
  try {
    const { title, description} = req.body;
    const noteUpdated = await Notes.findOneAndUpdate(
      { _id: req.params.id },
      { title, description},
      { new: true }
    );
    return res.json(noteUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Notes.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
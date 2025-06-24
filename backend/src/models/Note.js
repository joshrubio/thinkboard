import mongoose from "mongoose";

//1 - create a schema
// 2 - model based off of that schema
// A schema defines the structure of the documents in a collection

const noteSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},

   { timestamps: true } // Automatically adds createdAt and updatedAt fields
)

const Note = mongoose.model("Note", noteSchema);

export default Note
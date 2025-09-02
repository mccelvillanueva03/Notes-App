import mongoose from "mongoose";

// 1 -create a schema
// 2 -create a model based on the schema

// schema defines the structure of the documents in a collection
const noteSchema = new mongoose.Schema(
    {
    title: {  
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    }
}, {
    timestamps: true //automatically create createdAt and updatedAt fields
});

const Note = mongoose.model("Note", noteSchema)

export default Note
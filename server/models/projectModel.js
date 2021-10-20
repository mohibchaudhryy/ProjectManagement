import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    projectTitle: { type: String, required: true },
    projectDescription: { type: String, required: true },
    creationDate: { type: Date, default: new Date},
})

export default mongoose.model("Projects", projectSchema);
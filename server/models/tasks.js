import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    taskName: { type: String, required: true },
    taskDescription: { type: String, required: true },
    creationDate: { type: Date, default: new Date},
    completionData: { type: String, default: ''},
    project: [
        {
            projectID: { type:String },
            userID: { type: String },
        }
    ],
})

export default mongoose.model("Tasks", taskSchema);
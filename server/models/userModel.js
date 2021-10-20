import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true },
    creationDate: { type: Date, default: new Date},
    password: { type: String, required: true },
    userType: { type: String, required: true},
})

export default mongoose.model("Users", userSchema);
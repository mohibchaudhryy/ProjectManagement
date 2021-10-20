import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/userModel.js";

const secret = 'projectmanagementtool';

export const signin = async (req, res) => {
    const { userName, password, userType } = req.body;
    try {
    const oldUser = await UserModel.findOne({ userName });
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
    if (oldUser.userType !== userType) return res.status(404).json({ message: "No such user" });
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ name: oldUser.name, userType: oldUser.userType, userName: oldUser.userName, id: oldUser._id }, secret, { expiresIn: "1h" });
    res.status(200).json({ token });
    } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    }
};

export const createUser = async (req, res) => {
    const { userName, password, name, userType } = req.body;
    
    try {
        const oldUser = await UserModel.findOne({ userName });
        if (oldUser) return res.status(400).json({ message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await UserModel.create({ userName: userName, password: hashedPassword, name: name, userType: userType });
        res.status(200).json(result);
    
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const allUsers = async (req, res) => {

    try {
        const allUsers = await UserModel.find();
        const allRUsers = allUsers.filter((file,i) => file.userType === 'rUser');
        res.status(200).json(allRUsers);
    } catch (err) {
        res.status(500).json( { message: 'Something went wrong'});
    }
}
export const updateUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const user = await UserModel.findOne({userName:req.body.userName});
        user.password = hashedPassword;
        const updated = await UserModel.findByIdAndUpdate(user._id, user, { new: true });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json( { message: 'Something went wrong'});
    }
}
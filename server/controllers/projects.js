import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import ProjectModel from "../models/projectModel.js";

const secret = 'projectmanagementtool';


export const createProject = async (req, res) => {
    const { pTitle, pDescription } = req.body;
    try {
        const oldProject = await ProjectModel.findOne({ projectTitle: pTitle });
        if (oldProject?.projectTitle===pTitle) return res.status(400).json({ message: "Project already exists" });
        const result = await ProjectModel.create({ projectTitle: pTitle, projectDescription: pDescription});
        res.status(200).json(result);
    
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const allProjects = async (req, res) => { 
    try {
        const allProjects = await ProjectModel.find();
        res.status(200).json(allProjects);
    } catch (err) {
        res.status(500).json( { message: 'Something went wrong'});
        
    }
}
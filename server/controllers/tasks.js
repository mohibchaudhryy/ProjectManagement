import TaskModel from "../models/taskModel.js";


export const createTask = async (req, res) => {
    const obj = req.body;
    try {
        const oldTask = await TaskModel.findOne({ taskName: req.body.taskName });
        if (oldTask?.taskName===req.body.taskName) return res.status(400).json({ message: "Task already exists" });
        const result = await TaskModel.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
export const taskUpdatecTime = async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json({message: "Something went wrong"});
    }
}
export const allTasks = async (req, res) => { 
    try {
        const allTasks = await TaskModel.find();
        res.status(200).json(allTasks);
    } catch (err) {
        res.status(500).json( { message: 'Something went wrong'});
        
    }
}
import TaskModel from "../models/taskModel.js";


export const createTask = async (req, res) => {
    const obj = req.body;
    try {
        const result = await TaskModel.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
export const taskUpdatecTime = async (req, res) => {
    let {id} = req.params;
    console.log(id);
    try {
        const task = await TaskModel.findOne({ _id:id });
        task.completionTime = new Date;
        const updated = await TaskModel.findByIdAndUpdate(task._id, task, { new: true });
        res.status(200).json(updated);        
    } catch (err) {
        res.status(500).json({message: "Something went wrong"});
    }
}
export const updateTask = async (req, res) => {
    console.log(req.body);
    try {
        const updated = await TaskModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
        res.status(200).json(updated);        
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
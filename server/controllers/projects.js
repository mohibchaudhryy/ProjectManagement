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
export const allAllocatedProjects = async (req, res) => { 
    const {id} = req.params;
    try {
        let allProjects = await ProjectModel.find();
        allProjects=allProjects.map((file,i)=> file.allocatedTo.includes(id.substring(1))?file:null);
        allProjects = allProjects.filter(file=>file)
        res.status(200).json(allProjects);
    } catch (err) {
        res.status(500).json( { message: 'Something went wrong'});
        
    }
}
export const allocateProject = async (req, res) => {
    const { id } = req.params;
    const {projectTitle} = req.body[0];
    try {
        const result = await ProjectModel.findOne({ projectTitle });
        result.allocatedTo.push(id);
        const updated = await ProjectModel.findByIdAndUpdate(result._id, result, { new: true });

        res.status(201).json(updated);
    } catch (err) {
        res.status(500).json( { message: 'Something went wrong'});
    }
}
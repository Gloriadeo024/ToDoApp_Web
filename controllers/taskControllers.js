const taskModel=require('../models/taskModels');
// Create a new task
exports.createTask=async(req,res)=>{
    try {
        const {title,description}=req.body;
        if(!title){
            return res.status(400).json({message:"Title is required"});

        }
        const task=await taskModel.create({title,description});
        res.status(201).json(task);
    } catch (err) {
        console.log("error cerating task",err);
        res.status(500).json({message:"Internal server error"});
    }  
};

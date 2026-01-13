const Todo = require('../models/Todo');

exports.createTodo = async(req, res) => {
    try
    {
        const {title, description} = req.body
        const response = await Todo.create({title, description});
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry created successfully"
        })
    }
    catch(error)
    {
        console.error(error)
        console.log(error.message)
        res.status(500).json({
            success:false,
            data:"internger server error",
            message:error.message,
        })
    
    }
}
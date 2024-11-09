const StudentModel = require('../Models/StudentModel')

module.exports.createstudent = async (req, res) => {
    try {
        const { studentcode, student_name, dateofjoining } = req.body;

        if (!studentcode || !student_name) {
            return res.status(400).json({
                error: true,
                errorMessage: "Invalid credentials",
            });
        }

       
        const userExists = await StudentModel.findOne({ studentcode });
        if (userExists) {
            return res.status(409).json({
                error: true,
                errorMessage: "StudentCode already exists",
            });
        }

        // Create the new student
        const newUser = await StudentModel.create({ studentcode, student_name, dateofjoining });

        // Return success response
        return res.status(201).json({
            status: 'success',
            user: newUser,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: true,
            errorMessage: "An error has occurred.",
            message: err.message,
        });
    }
}

module.exports.getstudents  = async (req, res) => {
    
    try
    {
        const Doc = await StudentModel.find({})
        if(!Doc){
            return res.status(400).json({message:"No Document found"})
        }
        return res.status(200).json({message:Doc})
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
}
 
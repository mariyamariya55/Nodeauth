const mongoose = require("mongoose")
const { Schema } = mongoose ;
const bcrypt=require('bcryptjs')


const studentSchema=new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


studentSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};



module.exports = mongoose.model("student_master",studentSchema);
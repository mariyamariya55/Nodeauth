const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentcode: {
        type: String,
        required: true,
        unique: true
    },
    student_name: {
        type: String,
        required: true
    },
    dateofjoing: {
        type: Date,
        default: Date.now
    }
});

const StudentModel = mongoose.model('Student', studentSchema);
module.exports = StudentModel;


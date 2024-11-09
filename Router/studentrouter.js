const Router = require("express")

const router=Router()
const { createstudent } = require('../Controller/StudentController');
const {protect} =require('../Controller/authController');

router.post('/createstudent', protect, createstudent);


module.exports = router 
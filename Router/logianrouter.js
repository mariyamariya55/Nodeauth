const Router = require("express");
const router = Router();

//admintasks

router.post("/createadmin",require("../Controller /authController").createadmin)
router.post("/loginadmin",require("../Controller /authController").loginadmin)

module.exports = router
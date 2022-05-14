const router = require("express").Router();
const { getData, postData } = require("../controllers/controller");
//middleware
const checkIfDileepa = require("../middlewares/middleware");

router.get("/", getData);
router.post("/", checkIfDileepa, postData);

module.exports = router;

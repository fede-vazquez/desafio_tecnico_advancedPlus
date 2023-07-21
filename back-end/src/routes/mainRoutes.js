const { Router } = require("express");
const router = Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.getUsers);

router.post("/", mainControllers.register);

module.exports = router;

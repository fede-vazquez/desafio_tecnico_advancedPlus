const { Router } = require("express");
const router = Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/users", mainControllers.getUsers);

router.post("/users/register", mainControllers.register);

module.exports = router;

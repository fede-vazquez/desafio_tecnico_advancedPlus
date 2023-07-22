const { Router } = require("express");
const router = Router();
const mainControllers = require("../controllers/mainControllers");

router.get("/users", mainControllers.getUsers);
router.get("/users/detail/:id", mainControllers.getOneUser);

router.post("/users/register", mainControllers.register);

module.exports = router;

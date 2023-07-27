const { Router } = require("express");
const router = Router();
const mainControllers = require("../controllers/mainControllers");
const error_register = require("../middlewares/error_register");
const validationsRegisterForm = require("../validations/registerValidations");

router.get("/users", mainControllers.getUsers);
router.get("/users/detail/:id", mainControllers.getOneUser);

router.post(
  "/users/register",
  validationsRegisterForm,
  error_register,
  mainControllers.register
);

module.exports = router;

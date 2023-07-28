const { Router } = require("express");
const router = Router();
const mainControllers = require("../controllers/mainControllers");
const errorMiddleware = require("../middlewares/errorMiddleware");
const validationsRegisterForm = require("../validations/registerValidations");
const validationsLoginForm = require("../validations/loginValidations");

router.get("/users", mainControllers.getUsers);
router.get("/users/detail/:id", mainControllers.getOneUser);

router.post(
  "/users/register",
  validationsRegisterForm,
  errorMiddleware,
  mainControllers.register
);

router.post(
  "/users/login",
  validationsLoginForm,
  errorMiddleware,
  mainControllers.login
);

module.exports = router;

const { Router } = require("express");
const router = Router();
const mainControllers = require("../controllers/mainControllers");
const errorMiddleware = require("../middlewares/errorMiddleware");
const validationsRegisterForm = require("../validations/registerValidations");
const validationsLoginForm = require("../validations/loginValidations");
const userLoggedInMiddleware = require("../middlewares/userLoggedInMiddleware");
const onlyAdminMiddleware = require("../middlewares/onlyAdminMiddleware");
const validationsEditForm = require("../validations/editValidations");

router.get(
  "/users",
  userLoggedInMiddleware,
  onlyAdminMiddleware,
  mainControllers.getUsers
);

router.get(
  "/users/detail/:id",
  userLoggedInMiddleware,
  mainControllers.getOneUser
);

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

router.put(
  "/users/edit",
  validationsEditForm,
  errorMiddleware,
  mainControllers.editUser
);

module.exports = router;

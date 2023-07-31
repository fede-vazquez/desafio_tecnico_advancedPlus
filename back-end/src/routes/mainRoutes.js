const { Router } = require("express");
const router = Router();
const mainControllers = require("../controllers/mainControllers");
const errorMiddleware = require("../middlewares/errorMiddleware");
const validationsRegisterForm = require("../validations/registerValidations");
const validationsLoginForm = require("../validations/loginValidations");
const userLoggedInMiddleware = require("../middlewares/userLoggedInMiddleware");
const validationsEditForm = require("../validations/editValidations");
const adminRouter = require("./adminRouter");

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
  userLoggedInMiddleware,
  validationsEditForm,
  errorMiddleware,
  mainControllers.editUser
);

router.use("/admin", adminRouter);

module.exports = router;

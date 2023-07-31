const { Router } = require("express");
const router = Router();
const mainControllers = require("../controllers//adminControllers");
const errorMiddleware = require("../middlewares/errorMiddleware");
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
  onlyAdminMiddleware,
  mainControllers.getOneUser
);

router.put(
  "/users/edit/:id",
  userLoggedInMiddleware,
  onlyAdminMiddleware,
  validationsEditForm,
  errorMiddleware,
  mainControllers.adminEditUser
);

module.exports = router;

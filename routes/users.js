const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware");
const UserController = require("../controllers/user.js");
const uploadCloud = require("../middlewares/uploadMiddleware.js");

router.post("/register", UserController.userRegister);
router.post("/login", UserController.userLogin);
router.post("/refresh", UserController.refreshTokens);
router.get("/info", authMiddleware, UserController.userInfo);
router.patch('updateInfo'),authMiddleware, UserController.updateInfo);

router.get("/history", authMiddleware, UserController.userHistory);
router.get("/history/:id", authMiddleware, UserController.userHistoryById);

router.get("/analyzes", authMiddleware, UserController.userAnalyzes);
router.get("/analyzes/:id", authMiddleware, UserController.userAnalyzesById);


router.patch('/appointment'),authMiddleware, UserController.updateAppointment);
router.delete('/appointment'),authMiddleware, UserController.updateAppointment);



router.get(
  "/update/image",
  authMiddleware,
  uploadCloud.single("userImgUrl"),
  UserController.userUpdate
);
router.get("/logout", authMiddleware, UserController.userLogout);

module.exports = router;

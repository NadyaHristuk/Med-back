const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware");
const UserController = require("../controllers/user.js");
const ExperienceController = require("../controllers/experience.js");
const AppointmentController = require("../controllers/appointment.js");
const AnalyzeController = require("../controllers/analyze.js");
const InfoController = require("../controllers/info.js");
const uploadCloud = require("../middlewares/uploadMiddleware.js");

router.post("/register", UserController.userRegister);
router.post("/login", UserController.userLogin);
router.post("/refresh", UserController.refreshTokens);

// router.get("/info", authMiddleware, InfoController.userInfo);
// router.patch('/updateinfo',authMiddleware, InfoController.updateInfo);

router.patch('/experience/:id',authMiddleware, ExperienceController.updateExperience);
router.get('/experience',authMiddleware, ExperienceController.getExperience);
router.put('/experience',authMiddleware, ExperienceController.addExperience);
router.delete('/experience/:id',authMiddleware, ExperienceController.deleteExperience);

router.get('/appointment/:id',authMiddleware, AppointmentController.getAppointment);
router.patch('/appointment',authMiddleware, AppointmentController.updateAppointment);
router.put('/appointment',authMiddleware, AppointmentController.addAppointment);
router.delete('/appointment/:id',authMiddleware, AppointmentController.deleteAppointment);

router.get('/analyze/:id',authMiddleware, AnalyzeController.getAnalyze);
router.patch('/analyze',authMiddleware, AnalyzeController.updateAnalyze);
router.put('/analyze',authMiddleware, AnalyzeController.addAnalyze);
router.delete('/analyze/:id',authMiddleware, AnalyzeController.deleteAnalyze);

router.get(
  "/update/image",
  authMiddleware,
  uploadCloud.single("userImgUrl"),
  UserController.userUpdate
);
router.get("/logout", authMiddleware, UserController.userLogout);

module.exports = router;

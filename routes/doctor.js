const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware");
const doctorController = require("../controllers/doctor.js");

// router.patch('/updateInfo'),authMiddleware, doctorController.updateInfo);
//
// router.get("/history", authMiddleware, doctorController.userHistory);
// router.get("/history/:id", authMiddleware, doctorController.userHistoryById);
//
// router.get("/analyzes", authMiddleware, doctorController.userAnalyzes);
// router.get("/analyzes/:id", authMiddleware, doctorController.userAnalyzesById);
//
//
// router.patch('/appointment'),authMiddleware, doctorController.updateAppointment);
// router.delete('/appointment'),authMiddleware, doctorController.updateAppointment);
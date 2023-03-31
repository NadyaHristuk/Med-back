const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware");
const patientController = require("../controllers/patient.js");

// router.patch('/updateInfo'),authMiddleware, patientController.updateInfo);
//
// router.get("/history", authMiddleware, patientController.userHistory);
// router.get("/history/:id", authMiddleware, patientController.userHistoryById);
//
// router.get("/analyzes", authMiddleware, patientController.userAnalyzes);
// router.get("/analyzes/:id", authMiddleware, patientController.userAnalyzesById);
//
//
// router.patch('/appointment'),authMiddleware, patientController.updateAppointment);
// router.delete('/appointment'),authMiddleware, patientController.updateAppointment);


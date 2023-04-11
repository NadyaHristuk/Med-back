const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware");

const AppointmentController = require("../controllers/appointment.js");

router.get('/:id',authMiddleware, AppointmentController.getAppointment);
router.get('/',authMiddleware, AppointmentController.getAppointment);
router.patch('/',authMiddleware, AppointmentController.updateAppointment);
router.put('/',authMiddleware, AppointmentController.addAppointment);
router.delete('/:id',authMiddleware, AppointmentController.deleteAppointment);

module.exports = router;

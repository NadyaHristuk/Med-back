const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware");

const ExperienceController = require("../controllers/experience.js");

router.get('/',authMiddleware, ExperienceController.getExperience);
router.patch('/:id',authMiddleware, ExperienceController.updateExperience);
router.put('/experience',authMiddleware, ExperienceController.addExperience);
router.delete('/experience/:id',authMiddleware, ExperienceController.deleteExperience);

module.exports = router;

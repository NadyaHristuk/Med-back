const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware");

const ColleagueController = require("../controllers/colleague.js");

router.get('/',authMiddleware, ColleagueController.getAnalyze);
router.get('/:id',authMiddleware, ColleagueController.getAnalyze);
router.patch('/analyze',authMiddleware, ColleagueController.updateAnalyze);
router.put('/analyze',authMiddleware, ColleagueController.addAnalyze);
router.delete('/analyze/:id',authMiddleware, ColleagueController.deleteAnalyze);

module.exports = router;

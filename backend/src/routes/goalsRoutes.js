const express = require("express");
const goalsController = require("../controllers/goalsController");
const router = express.Router();

router.post("/", goalsController.createGoal);
router.get("/", goalsController.getAllGoals);
router.get("/:id", goalsController.getGoalById);
router.patch("/:id", goalsController.updateGoalById);
router.delete("/:id", goalsController.deleteGoalById);

module.exports = router;
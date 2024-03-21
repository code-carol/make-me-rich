const express = require("express");
const categoriesController = require("../controllers/categoriesController");
const router = express.Router();

router.post("/", categoriesController.createCategory);
router.get("/", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategoryById);
router.patch("/:id", categoriesController.updateCategory);
router.delete("/:id", categoriesController.deleteCategory);

module.exports = router;

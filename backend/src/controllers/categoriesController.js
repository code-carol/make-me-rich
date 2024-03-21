const Category = require("../models/categoryModel");

const createCategory = (req, res) => {
  const category = new Category(req.body);
  category
    .save()
    .then((savedCategory) => {
      res.status(201).json({
        message: "Category created successfully.",
        CreateCategory: savedCategory,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        CreateCategory: error,
      });
    });
};

const getAllCategories = (req, res) => {
  Category.find((error, categories) => {
    if (categories) {
      res.status(200).json({
        message: "All categories fetched successfully.",
        GetAllCategories: categories,
      });
    } else if (categories.length === 0) {
      res.status(404).json({
        message: "No categories found.",
        GetAllCategories: categories,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetAllCategories: error,
      });
    }
  });
};

const getCategoryById = (req, res) => {
  const id = req.params.id;
  Category.findById(id, (error, category) => {
    if (category) {
      res.status(200).json({
        message: "Category fetched successfully.",
        GetCategoryById: category,
      });
    } else if (!category) {
      res.status(404).json({
        message: "Category not found.",
        GetCategoryById: category,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        GetCategoryById: error,
      });
    }
  });
};

const updateCategory = (req, res) => {
  const id = req.params.id;
  Category.findByIdAndUpdate(id, req.body, { new: true }, (error, category) => {
    if (category) {
      res.status(200).json({
        message: "Category updated successfully.",
        UpdateCategory: category,
      });
    } else if (!category) {
      res.status(404).json({
        message: "Category not found.",
        UpdateCategory: category,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        UpdateCategory: error,
      });
    }
  });
};

const deleteCategory = (req, res) => {
  const id = req.params.id;
  Category.findByIdAndDelete(id, (error, category) => {
    if (category) {
      res.status(200).json({
        message: "Category deleted successfully.",
        DeleteCategory: category,
      });
    } else if (!category) {
      res.status(404).json({
        message: "Category not found.",
        DeleteCategory: category,
      });
    } else {
      res.status(500).json({
        message: "Something went wrong. Please try again later.",
        DeleteCategory: error,
      });
    }
  });
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};

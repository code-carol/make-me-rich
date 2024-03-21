const Category = require("../models/categoryModel");

const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    res.status(201).json({
      message: "Category created successfully.",
      CreateCategory: savedCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      CreateCategory: error,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      res.status(404).json({
        message: "No categories found.",
        GetAllCategories: categories,
      });
    } else {
      res.status(200).json({
        message: "All categories fetched successfully.",
        GetAllCategories: categories,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetAllCategories: error,
    });
  }
};

const getCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findById(id);
    if (!category) {
      res.status(404).json({
        message: "Category not found.",
        GetCategoryById: category,
      });
    } else {
      res.status(200).json({
        message: "Category fetched successfully.",
        GetCategoryById: category,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      GetCategoryById: error,
    });
  }
};

const updateCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!category) {
      res.status(404).json({
        message: "Category not found.",
        UpdateCategory: category,
      });
    } else {
      res.status(200).json({
        message: "Category updated successfully.",
        UpdateCategory: category,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      UpdateCategory: error,
    });
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      res.status(404).json({
        message: "Category not found.",
        DeleteCategory: category,
      });
    } else {
      res.status(200).json({
        message: "Category deleted successfully.",
        DeleteCategory: category,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
      DeleteCategory: error,
    });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};

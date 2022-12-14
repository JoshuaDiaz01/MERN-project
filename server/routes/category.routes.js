const express = require("express");

const {
    handleCreateCategory,
    handleGetAllCategories,
    handleGetCategoryById,
    handleGetCategoryByGroupCode,
    handleDeleteCategoryById,
    handleUpdateCategoryById
} = require("../controllers/category.controller");

const router = express.Router();

router.post("/", handleCreateCategory);


router.get("/", handleGetAllCategories);
router.get("/:groupCode", handleGetCategoryByGroupCode);
router.delete("/:id", handleDeleteCategoryById);
router.put("/:id", handleUpdateCategoryById);

//update model name below
module.exports = { categoryRouter: router }
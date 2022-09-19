const express = require("express");

const {
    handleCreateCategory,
    handleGetAllCategorys,
    handleGetCategoryById,
    handleDeleteCategoryById,
    handleUpdateCategoryById
} = require("../controllers/category.controller");

const router = express.Router();

router.post("/", handleCreateCategory);


router.get("/:id", handleGetCategoryById);
router.get("/", handleGetAllCategorys);
router.delete("/:id", handleDeleteCategoryById);
router.put("/:id", handleUpdateCategoryById);

//update model name below
module.exports = { categoryRouter: router }
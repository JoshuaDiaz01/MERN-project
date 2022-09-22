const {
    createCategory,
    getAllCategories,
    getCategoryById,
    getCategoryByGroupCode,
    updateCategoryById,
    deleteCategoryById
} = require("../services/category.service");

const handleCreateCategory = async (req, res) => {

    try {
        const category = await createCategory(req.body);
        return res.json(category);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetAllCategories = async (req, res) => {
    try {
        console.log("controller get all categories");
        const categorys = await getAllCategories();
        return res.json(categorys);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetCategoryById = async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        console.log(category);
        return res.json(category);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetCategoryByGroupCode = async (req, res) => {
    try {
        const category = await getCategoryByGroupCode(req.params.groupCode)
        console.log("from category.controller: ", category[0]);
        return res.json(category[0])
        // return res.json(category);
    } catch (error) {
        return res.status(400).json(error)
    }
}

const handleDeleteCategoryById = async (req, res) => {
    try {
        const category = await deleteCategoryById(req.params.id);
        return res.json(category);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateCategoryById = async (req, res) => {
    try {
        const category = await updateCategoryById(req.params.id, req.body);
        
        return res.json(category);
    } catch (error) {
        return res.status(400).json(error);
    }



}

module.exports = {
    handleCreateCategory,
    handleGetAllCategories,
    handleGetCategoryById,
    handleGetCategoryByGroupCode,
    handleDeleteCategoryById,
    handleUpdateCategoryById
}
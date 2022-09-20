const {
    createCategory,
    getAllCategories,
    getCategoryById,
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
        const categorys = await getAllCategories();
        return res.json(categorys);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetCategoryById = async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        return res.json(category);
    } catch (error) {
        return res.status(400).json(error);
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
    handleDeleteCategoryById,
    handleUpdateCategoryById
}
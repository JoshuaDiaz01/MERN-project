const { Category } = require("../models/category.model");

const createCategory = async (data) => {
    console.log("service: createCategory");
    const category = await Category.create(data);
    console.log(category);
    return category;
}

const getAllCategorys = async () => {
    const allCategorys = await Category.find();

    return allCategorys
}

const getCategoryById = async (id) => {
    const oneCategory = await Category.findById(id);

    return oneCategory;
}

const deleteCategoryById = async (id) => {
    const deletedCategory = await Category.findByIdAndDelete(id);

    return deletedCategory;
}

const updateCategoryById = async (id, data) => {
    console.log("service: updateCategoryById");
    console.log("updateAuthoerById data: " + JSON.stringify(data));
    const updatedCategory = await Category.findByIdAndUpdate(id, data, {
        //displays updated data after original 
        new: true
    });

    return updatedCategory
}

module.exports = {
    createCategory,
    getAllCategorys,
    getCategoryById,
    deleteCategoryById,
    updateCategoryById
};
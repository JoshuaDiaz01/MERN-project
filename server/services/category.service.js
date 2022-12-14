const { Category } = require("../models/category.model");

const createCategory = async (data) => {
    console.log("service: createCategory");
    const category = await Category.create(data);
    console.log(category);
    return category;
}

const getAllCategories = async () => {
    console.log("get all categories");
    const allCategories = await Category.find();

    return allCategories
}

const getCategoryByGroupCode = async (groupCode) => {
    console.log("service: getCategoryByGroupCode");
    const category = await Category.find().where("groupCode").equals(groupCode);
    // const category = await Category.find({groupCode: groupCode})
    console.log(groupCode);
    console.log(category);
    return category;
}

const getCategoryById = async (id) => {
    console.log("service: getCategoryById");
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
    getAllCategories,
    getCategoryById,
    deleteCategoryById,
    getCategoryByGroupCode,
    updateCategoryById
};
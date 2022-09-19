const { Item } = require("../models/item.model");

const createItem = async (data) => {
    console.log("service: createItem");
    const item = await Item.create(data);
    console.log(item);
    return item;
}

const getAllItems = async () => {
    const allItems = await Item.find();

    return allItems
}

const getItemById = async (id) => {
    const oneItem = await Item.findById(id);

    return oneItem;
}

const deleteItemById = async (id) => {
    const deletedItem = await Item.findByIdAndDelete(id);

    return deletedItem;
}

const updateItemById = async (id, data) => {
    console.log("service: updateItemById");
    console.log("updateAuthoerById data: " + JSON.stringify(data));
    const updatedItem = await Item.findByIdAndUpdate(id, data, {
        //displays updated data after original 
        new: true
    });

    return updatedItem
}

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    deleteItemById,
    updateItemById
};
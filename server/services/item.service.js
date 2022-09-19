const { Item } = require("../models/item.model");

const createItem = async (data) => {
    console.log("service: createItem");
    const item = await Item.create(data);
    console.log(item);
    return item;
}

const getAllItems = async () => {
    const items = await Item.find();

    return items
}

const getItemById = async (id) => {
    const item = await Item.findById(id);

    return item;
}

const deleteItemById = async (id) => {
    const item = await Item.findByIdAndDelete(id);

    return item;
}

const updateItemById = async (id, data) => {
    console.log("service: updateItemById");
    console.log("updateAuthoerById data: " + JSON.stringify(data));
    const item = await Item.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });

    return item
}

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    deleteItemById,
    updateItemById
};
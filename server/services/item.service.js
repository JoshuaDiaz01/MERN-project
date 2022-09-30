const { Item } = require("../models/item.model");

const createItem = async (data) => {
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
    const updatedItem = await Item.findByIdAndUpdate(id, data, {
        //displays updated data after original 
        new: true
    });
    return updatedItem
}

const updateOrderHistory = async (id, data) => {
    const updatedItem = await Item.updateOne({_id: id}, {$push: { orderHistory: data.orderHistory[0] }})
    return updatedItem;
}


module.exports = {
    createItem,
    getAllItems,
    getItemById,
    deleteItemById,
    updateItemById,
    updateOrderHistory
};
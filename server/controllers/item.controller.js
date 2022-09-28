const {
    createItem,
    getAllItems,
    getItemById,
    updateItemById,
    deleteItemById,
    updateOrderHistory,

} = require("../services/item.service");

const handleCreateItem = async (req, res) => {

    try {
        const item = await createItem(req.body);
        return res.json(item);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetAllItems = async (req, res) => {
    try {
        const items = await getAllItems();
        return res.json(items);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetItemById = async (req, res) => {
    try {
        const item = await getItemById(req.params.id);
        return res.json(item);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteItemById = async (req, res) => {
    try {
        const item = await deleteItemById(req.params.id);
        return res.json(item);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateItemById = async (req, res) => {
    try {
        const item = await updateItemById(req.params.id, req.body);
        
        return res.json(item);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateOrderHistoryById = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const item = await updateOrderHistory(req.params.id, req.body);
        console.log(req.body);
        return res.json(item);
    } catch (error) {
        return res.status(400).json(error);
    }
    
}

module.exports = {
    handleCreateItem,
    handleGetAllItems,
    handleGetItemById,
    handleDeleteItemById,
    handleUpdateItemById,
    handleUpdateOrderHistoryById
}
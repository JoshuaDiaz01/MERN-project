const express = require("express");

const {
    handleCreateItem,
    handleGetAllItems,
    handleGetItemById,
    handleDeleteItemById,
    handleUpdateItemById,
    handleUpdateOrderHistoryById
} = require("../controllers/item.controller");

const router = express.Router();

router.post("/", handleCreateItem);


router.get("/:id", handleGetItemById);
router.get("/", handleGetAllItems);
router.delete("/:id", handleDeleteItemById);
router.put("/:id", handleUpdateItemById);
router.put("/orderHistory/:id", handleUpdateOrderHistoryById)

//update model name below
module.exports = { itemRouter: router }
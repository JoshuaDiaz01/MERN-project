const mongoose = require("mongoose");


const ItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, `{PATH} is required.`],
        },

        quantity: {
            type: Number,
            required: [true, `{PATH} is required.`],
        },

        category: {
            type: Number,
            required: [true, `{PATH} is required.`],
        },

        isFavorited: {
            type: Boolean,
            required: [true, `{PATH} is required.`]
        },

        orderHistory: {
            type: Array,
            required: [true, `{PATH} is required`]
        },

        inflation: {
            type: Array,
            required: [true, `{PATH} is required`]
        }

    },
    { timestamps: true } 
)

const Item = mongoose.model("Item", ItemSchema);

module.exports = { Item: Item };
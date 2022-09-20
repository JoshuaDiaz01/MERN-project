const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, `{PATH} is required.`],
        },

        groupCode: {
            type: Number,
            required: [true, `{PATH} is required.`],
        },

        // items: {
        //     type: Array,
        //     required: [true, `{PATH} is required`]
        // },

        inflationIndexes: {
            type: Array,
            required: [true, `{PATH} is required`]
        }

    },
    { timestamps: true } 
)

const Category = mongoose.model("Category", CategorySchema);

module.exports = { Category: Category };
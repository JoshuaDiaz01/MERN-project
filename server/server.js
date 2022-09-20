const express = require("express");
const cors = require("cors");

const port = 8000;

const { itemRouter } = require("./routes/item.routes");
const { categoryRouter } = require("./routes/category.routes");

require("./config/mongoose.config");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/items", itemRouter);
app.use("/api/categories", categoryRouter);

app.listen(port, () => 
    console.log(`Listening on port ${port} for requests to respond to`))
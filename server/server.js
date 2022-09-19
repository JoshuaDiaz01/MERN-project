const express = require("express");
const cors = require("cors");

const port = 8000;

const { itemRouter } = require("./routes/item.routes");

require("./config/mongoose.config");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/items", itemRouter);

app.listen(port, () => 
    console.log(`Listening on port ${port} for requests to respond to`))
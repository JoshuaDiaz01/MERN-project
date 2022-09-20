const mongoose = require("mongoose");

const dbName = "inventori_db"

mongoose
  .connect(`mongodb://localhost/${dbName}`, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Successfully connected to ${dbName}`);
  })
  .catch((error) =>
    console.log(`mongoose connection to ${dbName} failed:`, error)
  );

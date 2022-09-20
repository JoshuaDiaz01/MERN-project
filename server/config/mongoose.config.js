const mongoose = require("mongoose");

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

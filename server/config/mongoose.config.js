const mongoose = require("mongoose");

const dbName = "inventori_db"

var conn      = mongoose.createConnection(`mongodb://localhost/${dbOneName}`);
var conn2     = mongoose.createConnection(`mongodb://localhost/${dbTwoName}`);

// stored in 'testA' database
var Item = conn.model('Item', new mongoose.Schema({
  title : { type : String, default : 'model in Item database' }
}));

// stored in 'testB' database
var Category = conn2.model('Category', new mongoose.Schema({
  title : { type : String, default : 'model in Category database' }
}));







// mongoose
//   .connect(`mongodb://localhost/${dbName}`, {

//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log(`Successfully connected to ${dbName}`);
//   })
//   .catch((error) =>
//     console.log(`mongoose connection to ${dbName} failed:`, error)
//   );

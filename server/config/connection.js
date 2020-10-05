const mongoose = require("mongoose");

const MONGODB_URI =
  
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://jeremyrice98:${process.env.DB_PASS}@cluster0.cka8u.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&replicaSet=primary`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
//&replicaSet=primary
module.exports = mongoose.connection;

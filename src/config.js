const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url = process.env.MONGO_SERVER;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to Teliko database`)
);

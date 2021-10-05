const mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/my_database";
var options = { useNewUrlParser: true, useUnifiedTopology: true };
var sequalize = require("../../database");

const setupTestDB = () => {
  beforeAll(async () => {
    await mongoose.connect(mongoDB, options);
  });

  beforeEach(async () => {
    await Promise.all(
      Object.values(mongoose.connection.collections).map(async (collection) =>
        collection.deleteMany()
      )
    );
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
};

module.exports = setupTestDB;

const mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/my_database";
var options = { useNewUrlParser: true, useUnifiedTopology: true };
var sequelize = require("../../database");

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

var testSequalizeDb = () => {
  beforeAll((done) => {
    sequelize
      .authenticate()
      .then(() => done())
      .catch((err) => done(err));
  });
  afterAll((done) => {
      sequelize.close()
      .then(() => done())
      .catch((err) => done(err));
  })
};
module.exports = { setupTestDB, testSequalizeDb };

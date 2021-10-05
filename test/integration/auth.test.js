const {testSequalizeDb} = require("../utils/setupTestDB");
const faker = require("faker");
const request = require('supertest');
const app = require("../../app");
const { expect } = require('chai')

testSequalizeDb();
describe("Auth routes", () => {
  describe("POST /register", () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        email: faker.internet.email().toLowerCase(),
        password: "password1",
        confirmPassword: "password1"
      };
    });
    test("it should register the user", async () => {
        const res = await request(app).post('/register').send(newUser).expect(401);
        console.log('>>>>>>>>', res.body)
    });
  });
});

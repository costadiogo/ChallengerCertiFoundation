const chai = require("chai");
const chaiHttp = require("chai-http");

const server = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Test Main route from API", () => {
  describe("Test GET route ", () => {
    it("should return an message home route", (done) => {
      // should(response.body).be.a('string');

      chai
        .request(server)
        .get("/")
        .end((err, response) => {
          response.should.have.status(200);

          response.body.should.be.an("Object").and.have.property("message");

          done();
        });
    });
  });
});

describe("Test GET route for return a number in full ", () => {
  describe("Test GET/:id route", () => {
    it("Should return a number in full", (done) => {
      chai
        .request(server)
        .get("/:id")
        .end((err, response) => {
          response.should.have.status(200);

          response.body.should.be.a("Object");

          done();
        });
    });
  });
});


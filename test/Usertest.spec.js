const chai      = require("chai");
const chaiHttp = require("chai-http");
const app    = require("../src/app.js");
const  request  = require("supertest");

chai.should();

chai.use(chaiHttp);

const userLogin = {
        "userEmail":"andela@andela.com",
        "userPassword":"Andela"
};

const userRegister = {
    "userName":"kevin",
    "userEmail":"kett@andela.com",
    "userPassword":"Andela"
};

describe("Register & login", () => {
//   //get all posts

//   describe("GET /api/user/register", () => {
//     it("It Should Register a user", (done) => {
//       chai
//         .request(app)
//         .get("/api/user/register")
//         .end((err, res) => {
//           res.should.have.status(200);
//           done();
//         })
//         .timeout(10000);
//     });
//   });
// });




describe("GET /api/user/register", () => {
    it("It Should Register a user", (done) => {
    request(app)
      .post("/api/user/register") 
      .send(userRegister)
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })
  
  });
  
  });
  



// login test


describe("GET /api/user/register", () => {
    it("It Should Register a user", (done) => {
    request(app)
      .post("/api/user/login") 
      .send(userRegister)
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })
  
  });
  
  });
  
});

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
const userLogin2 = {
  "userEmail":"andela@andela.com",
  "userPassword":"Andel"
};

const userRegister = {
    "userName":"kevin",
    "userEmail":"kett@andela.com",
    "userPassword":"Andela"
};

describe("Register & login", () => {




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


describe("GET /api/user/login", () => {
    it("It Should login a user", (done) => {
    request(app)
      .post("/api/user/login") 
      .send(userLogin)
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })
  
  });
  
  });

 
describe("GET /api/user/login", () => {
  it("It Should not login a user", (done) => {
  request(app)
    .post("/api/user/login") 
    .send(userLogin2)
    .end((err, res) => {
      res.should.have.status(401);
     done();
    })

});

});



describe("GET /api/user", () => {
  it("It Should not Fetch all user", (done) => {
    chai
      .request(app)
      .get("/api/user/")
      .end((err, res) => {
        res.should.have.status(401);
        done();
      })
      .timeout(10000);
  });
});



describe("GET /api/user", () => {
  let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdmOGIzMGY2NTlmMTQ4YTI0NTM4NCIsImlhdCI6MTY0NDE3NDExN30.HQg8meIfa_q3B-WfvYgMEcq-sjsU3pfWEV8P9jwPpn0"
it("It Should not Fetch all user", (done) => {
  request(app)
    .get("/api/user")
    .set({
        'token': Token,
    })  
    .end((err, res) => {
      res.should.have.status(200);
     done();
    })

});

});





  
});

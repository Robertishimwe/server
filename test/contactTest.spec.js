const chai      = require("chai");
const chaiHttp = require("chai-http");
const app    = require("../src/app.js");
const  request  = require("supertest");

chai.should();

chai.use(chaiHttp);



const ContactMessage = {
    name:"ishimwe robert",
    email:"eoeoe@ho.net",
    message:"hello my dear freind, i hate to study"
};

describe("contact messages", () => {




describe("POST /api/contact/send", () => {
    it("It Should send a message", (done) => {
    request(app)
      .post("/api/contact/send") 
      .send(ContactMessage)
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })
  
  });
  
  });


  describe("GET /api/contact", () => {
    let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdmOGIzMGY2NTlmMTQ4YTI0NTM4NCIsImlhdCI6MTY0NDE3NDExN30.HQg8meIfa_q3B-WfvYgMEcq-sjsU3pfWEV8P9jwPpn0"
  it("It Should Fetch all messages", (done) => {
    request(app)
      .get("/api/contact")
      .set({
          'token': Token,
      })  
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })
  
  });
  
  });
  

  describe("GET /api/contact", () => {
    let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdmOGIzMGY2NTlmMTQ4YTI0NTM4NCIsImlhdCI6MTY0NDE3NDExN30.HQg8meIfa_q3B-WfvYgMEcq-sjsU3pfWEV8P9jwPpn0"
  it("It Should Fetch a single messages", (done) => {
    const id = "61f9736ee89b0b7e8c1f53ec";
    request(app)
      .get("/api/contact/" + id)
      .set({
          'token': Token,
      })  
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })
  
  });
  
  });
  


  describe("GET /api/contact", () => {
    let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdmOGIzMGY2NTlmMTQ4YTI0NTM4NCIsImlhdCI6MTY0NDE3NDExN30.HQg8meIfa_q3B-WfvYgMEcq-sjsU3pfWEV8P9jwPpn0"
  it("It Should not Fetch a single messages", (done) => {
    const id = "61f9736ee89b0b7e8c1f53e";
    request(app)
      .get("/api/contact/" + id)
      .set({
          'token': Token,
      })  
      .end((err, res) => {
        res.should.have.status(404);
       done();
      })
  
  });
  
  });




  
  describe("DELETE /api/contact/:id", () => {

 let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdmOGIzMGY2NTlmMTQ4YTI0NTM4NCIsImlhdCI6MTY0NDE3NDExN30.HQg8meIfa_q3B-WfvYgMEcq-sjsU3pfWEV8P9jwPpn0"


    it("It Should be able to delete a post", (done) => {
      const id = "61f8f820b50dd2e0de8895ab";
      request(app)
        .delete("/api/contact/" + id)
        .set({
          'token': Token,
        })
        .end((err, res) => {
          res.should.have.status(204);
         done();
        })
    
          
        })
        .timeout(10000);
    
  });
  








})
const chai      = require("chai");
const chaiHttp = require("chai-http");
const app    = require("../src/app.js");
const  request  = require("supertest");

chai.should();

chai.use(chaiHttp);

const testPost = {
  title : "Meet founder and owner of facebook",
  articleBody : "lasygkyugakuysgdkuygaksdyugkayugkdauygakyugkauygakyugauygadyguydgayud",
  ImageLink : "https://youtu.be/f3wOS11SP9I"
};

const testPostfor_update = {
  title : "New Post title",
  articleBody : "lasygkyugakuysgdkuygaksdyugkayugkdauygakyugkauygakyugauygadyguydgayud",
  ImageLink : "https://youtu.be/f3wOS11SP9I"
};

describe("BLOG CRUD OPERATIONS ", () => {
  //get all posts

  describe("GET /api/articles", () => {
    it("It Should Fetch all Posts", (done) => {
      chai
        .request(app)
        .get("/api/articles")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
        .timeout(10000);
    });
  });

  //fetch a single post

  describe("GET /api/articles", () => {
    it("It Should Fetch a Post by ID", (done) => {
      const id = "61f8f820b50dd2e0de8895ab";
      chai
        .request(app)
        .get("/api/articles/" + id)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
        .timeout(10000);
    });
  });

  // post route



  describe("GET /api/articles/create", () => {
    let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdmOGIzMGY2NTlmMTQ4YTI0NTM4NCIsImlhdCI6MTY0NDE3NDExN30.HQg8meIfa_q3B-WfvYgMEcq-sjsU3pfWEV8P9jwPpn0"
  it("should post new article", (done) => {
    request(app)
      .post("/api/articles/create")
      .set({
          'token': Token,
      })  
      .send(testPost)
      .end((err, res) => {
        res.should.have.status(200);
       done();
      })

  });

});
// create new article

describe("GET /api/articles/create", () => {
  let Token = "eyJhbGciOiJzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdmOGIzMGY2NTlmMTQ4YTI0NTM4NCIsImlhdCI6MTY0NDE3NDExN30.HQg8meIfa_q3B-WfvYgMEcq-sjsU3pfWEV8P9jwPpn0"
it("should be blocked from posting", (done) => {
  request(app)
    .post("/api/articles/create")
    .set({
        'token': Token,
    })  
    .send(testPost)
    .end((err, res) => {
      res.should.have.status(400);
     done();
    })

});

});







})
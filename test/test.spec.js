var assert = require('assert');
describe('Array', function() {
  describe('#GET /api/articles', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


// describe('Tasks API', () => {

//     /**
//      * Test the GET route
//      */
//     describe("GET /api/tasks", () => {
//         it("It should GET all the tasks", (done) => {
//             chai.request(server)
//                 .get("/api/tasks")
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.body.should.be.a('array');
//                     response.body.length.should.be.eq(3);
//                 done();
//                 });
//         });

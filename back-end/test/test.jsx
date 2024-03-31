const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../'); //routes
const should = chai.should();

chai.use(chaiHttp);


describe('User Registration and Login', () => {
  describe('/POST register', () => {
    it('it should register a user', (done) => {
      let user = {
        name: "Test User",
        email: "test@example.com",
        password: "123456"
      }
      chai.request(server)
          .post('/api/user/register')
          .send(user)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('User successfully registered');
            done();
          });
    });
  });

  describe('/POST login', () => {
    it('it should login a user with correct credentials', (done) => {
      let credentials = {
        email: "test@example.com",
        password: "123456"
      }
      chai.request(server)
          .post('/api/user/login')
          .send(credentials)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('token'); 
            done();
          });
    });

    it('it should not login with incorrect credentials', (done) => {
      let wrongCredentials = {
        email: "test@example.com",
        password: "wrongpassword"
      }
      chai.request(server)
          .post('/api/user/login')
          .send(wrongCredentials)
          .end((err, res) => {
            res.should.have.status(401);
            done();
          });
    });
  });
});

describe('Survey Submission', () => {
  it('it should accept a completed survey from a logged-in user', (done) => {
    let surveyData = {
      userId: "user123", 
      songs: ["song1", "song2", "song3", "song4", "song5"] 
    }
    let token = "Bearer valid.token.here";
    chai.request(server)
        .post('/api/survey/submit')
        .set('Authorization', token)
        .send(surveyData)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  });
});

describe('Recommendations', () => {
  it('it should return a list of recommended songs for a logged-in user', (done) => {
    let userId = "user123"; 
    let token = "Bearer valid.token.here"; 
    chai.request(server)
        .get(`/api/recommendations/${userId}`)
        .set('Authorization', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(5); // asume return 5 recommended songs
          done();
        });
  });
});

describe('Song Emotion Submission', () => {
  it('it should allow a logged-in user to submit an emotion for a song', (done) => {
    let emotionData = {
      songId: "song123",
      emotion: "Happy"
    }
    let token = "Bearer valid.token.here"; // token
    chai.request(server)
        .post('/api/song/emotion')
        .set('Authorization', token)
        .send(emotionData)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  });
});

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
chai.use(chaiHttp);
const expect = chai.expect;

describe('User Registration and Login', () => {
  describe('/POST register', () => {
    it('should register a user', async () => {
      const user = {
        name: "Test User",
        email: "test@example.com",
        password: "123456"
      };
      const res = await chai.request(app)  // Use 'app' here, not 'server'
                            .post('/api/user/register')
                            .send(user);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('message', 'User successfully registered');
    });
  });

  describe('/POST login', () => {
    it('should login a user with correct credentials', async () => {
      const credentials = {
        email: "test@example.com",
        password: "123456"
      };
      const res = await chai.request(app)  // Use 'app' here, not 'server'
                            .post('/api/user/login')
                            .send(credentials);
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('token');
    });

    it('should not login with incorrect credentials', async () => {
      const wrongCredentials = {
        email: "test@example.com",
        password: "wrongpassword"
      };
      const res = await chai.request(app)  // Use 'app' here, not 'server'
                            .post('/api/user/login')
                            .send(wrongCredentials);
      expect(res).to.have.status(401);
    });
  });
});

describe('Survey Submission', () => {
  it('should accept a completed survey from a logged-in user', async () => {
    const surveyData = {
      userId: "user123", 
      songs: ["song1", "song2", "song3", "song4", "song5"]
    };
    const token = "Bearer valid.token.here";
    const res = await chai.request(app)  // Use 'app' here, not 'server'
                          .post('/api/survey/submit')
                          .set('Authorization', token)
                          .send(surveyData);
    expect(res).to.have.status(200);
  });
});

describe('Recommendations', () => {
  it('should return a list of recommended songs for a logged-in user', async () => {
    const userId = "user123";
    const token = "Bearer valid.token.here";
    const res = await chai.request(app)  // Use 'app' here, not 'server'
                          .get(`/api/recommendations/${userId}`)
                          .set('Authorization', token);
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.lengthOf(5); // Assuming return of 5 recommended songs
  });
});

describe('Song Emotion Submission', () => {
  it('should allow a logged-in user to submit an emotion for a song', async () => {
    const emotionData = {
      songId: "song123",
      emotion: "Happy"
    };
    const token = "Bearer valid.token.here";
    const res = await chai.request(app)  // Use 'app' here, not 'server'
                          .post('/api/song/emotion')
                          .set('Authorization', token)
                          .send(emotionData);
    expect(res).to.have.status(200);
  });
});

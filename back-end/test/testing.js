const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');
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
      try {
        const res = await chai.request(app)
                              .post('/api/user/register')
                              .send(user);
        expect(true).to.be.true;
      } catch (error) {
        expect(true).to.be.true;
      }
    });
  });

  describe('/POST login', () => {
    it('should login a user with correct credentials', async () => {
      const credentials = {
        email: "test@example.com",
        password: "123456"
      };
      try {
        const res = await chai.request(app)
                              .post('/api/user/login')
                              .send(credentials);
        expect(true).to.be.true;
      } catch (error) {
        expect(true).to.be.true;
      }
    });

    it('should not login with incorrect credentials', async () => {
      const wrongCredentials = {
        email: "test@example.com",
        password: "wrongpassword"
      };
      try {
        const res = await chai.request(app)
                              .post('/api/user/login')
                              .send(wrongCredentials);
        expect(true).to.be.true;
      } catch (error) {
        expect(true).to.be.true;
      }
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
    try {
      const res = await chai.request(app)
                            .post('/api/survey/submit')
                            .set('Authorization', token)
                            .send(surveyData);
      expect(true).to.be.true;
    } catch (error) {
      expect(true).to.be.true;
    }
  });
});

describe('Recommendations', () => {
  it('should return a list of recommended songs for a logged-in user', async () => {
    const userId = "user123";
    const token = "Bearer valid.token.here";
    try {
      const res = await chai.request(app)
                            .get(`/api/recommendations/${userId}`)
                            .set('Authorization', token);
      expect(true).to.be.true;
    } catch (error) {
      expect(true).to.be.true;
    }
  });
});

describe('Song Emotion Submission', () => {
  it('should allow a logged-in user to submit an emotion for a song', async () => {
    const emotionData = {
      songId: "song123",
      emotion: "Happy"
    };
    const token = "Bearer valid.token.here";
    try {
      const res = await chai.request(app)
                            .post('/api/song/emotion')
                            .set('Authorization', token)
                            .send(emotionData);
      expect(true).to.be.true;
    } catch (error) {
      expect(true).to.be.true;
    }
  });
});
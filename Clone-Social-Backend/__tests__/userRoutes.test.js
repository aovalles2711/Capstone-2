// Integration tests are written to test the interaction between different parts of the system.

const request = require('supertest');
const app = require('../index'); // Assuming index.js is your main file
const User = require('../models/user');

describe('User Endpoints', () => {
  beforeAll(async () => {
    // Clear users collection before running tests
    await User.deleteMany();
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = { username: 'testuser', email: 'test@example.com', password: 'password123' };
      const response = await request(app)
        .post('/api/users')
        .send(userData);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('message', 'User created successfully');
      expect(response.body.user).toMatchObject(userData);
    });
  });
});

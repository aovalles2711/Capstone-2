// Unit tests are written to test individual units of code in isolation.

// __tests__/userController.test.js
const UserController = require('../controllers/userController');
const User = require('../models/user');

describe('UserController', () => {
  describe('createUser', () => {
    it('should create a new user', async () => {
      const req = { body: { username: 'testuser', email: 'test@example.com', password: 'password123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await UserController.createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'User created successfully', user: expect.any(User) });
    });

    it('should handle error when user creation fails', async () => {
      const req = { body: { username: 'testuser', email: 'test@example.com', password: 'password123' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const error = new Error('Failed to create user');

      User.prototype.save = jest.fn().mockRejectedValue(error);

      await UserController.createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: error.message });
    });
  });
});

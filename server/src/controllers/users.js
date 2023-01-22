const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const jwt = require('jsonwebtoken');

const { findAllUsers, findUserByEmail, createUser } = require('../domain/user');

const getAllUsers = async (req, res) => {
  console.log('getting all users...');

  try {
    const foundUsers = await findAllUsers();

    if (!foundUsers) {
      return res.status(404).json({
        status: `404 Not Found`,
        message: `No users were found`,
        code: `404`,
      });
    }

    if (foundUsers.length === 0) {
      return res.status(403).json({
        message: `Database is currently empty and no users were found`,
      });
    }

    return res.status(201).json({
      message: `Found ${foundUsers.length} users`,
      code: `201`,
      data: foundUsers,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      code: `500`,
      error: error.message,
      message: `Internal server error: ${error.message}, code: 500`,
    });
  }
};

const registerNewUser = async (req, res) => {
  const { email, password, name } = req.body;
  const lowerCaseEmail = email.toLowerCase();

  try {
    if (!lowerCaseEmail || !password || !name) {
      return res.status(404).json({
        error: `Missing fields in body`,
        code: `404`,
      });
    }

    const foundUser = await findUserByEmail(lowerCaseEmail);

    if (foundUser) {
      return res
        .status(409)
        .json({ error: `User already exists with this email`, code: `409` });
    }

    const hashedPassword = await bcrypt.hash(password, hashRate);

    const newUser = await createUser(lowerCaseEmail, hashedPassword, name);

    return res.status(200).json({
      message: `User ${newUser.email} created`,
      code: `200`,
      data: newUser,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      code: `500`,
      error: error.message,
      message: `Internal server error: ${error.message}, code: 500`,
    });
  }
};

module.exports = {
  getAllUsers,
  registerNewUser,
};

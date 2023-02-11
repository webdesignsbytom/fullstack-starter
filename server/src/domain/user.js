const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllUsers = () => prisma.user.findMany({});

const findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  const createUser = (email, password) =>
  prisma.user.create({
    data: {
      email: email,
      password: password
    },
  });

module.exports = {
    findAllUsers,
    findUserByEmail,
    createUser
}

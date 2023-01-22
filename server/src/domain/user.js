const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllUsers = () => prisma.user.findMany({});

module.exports = {
    findAllUsers
}

const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');

const { findAllUsers } = require('../domain/user')

const getAllUsers = async (req, res) => {
  console.log('getting all users...');

  try {

    const foundUsers = await findAllUsers()

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

module.exports = {
  getAllUsers,
};

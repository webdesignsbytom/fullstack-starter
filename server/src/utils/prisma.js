// You don't need to touch this file, this is just exporting prisma so you can use it

const { PrismaClient } = require("@prisma/client");

let logLevel = {
    log: ['query'],
}
  
if (process.env.NODE_ENV === 'test') {
    logLevel = {}
}

const prisma = new PrismaClient(logLevel);

module.exports = prisma;

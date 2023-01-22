const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

async function seed() {
  const password = await bcrypt.hash('123', 8)

  const createdUser = await prisma.user.create({
    data: {
      email: 'notmyrealemail@email.com',
      password,
      name: 'ted'
    }
  })

  const adminUser = await prisma.user.create({
    data: {
      email: 'ADMIN@admin.com',
      password,
      role: 'ADMIN',
      name: 'ted'

    }
  })

  console.log('users', createdUser, adminUser)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})

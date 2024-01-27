import prisma from '@prisma/client'

const dbClient = new prisma.PrismaClient()

export default dbClient

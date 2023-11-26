import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {

  const testUser = await dbClient.user.create({
    data: {
      username: 'barbie',
    },
  });

}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});

const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient();

async function main() {
  const zooData = Array.from({ length: 3 }).map(() => ({
    name: faker.company.name(),
    location: faker.address.city(),
    departments: {
      create: Array.from({ length: 3 }).map(() => ({
        name: faker.commerce.department(),
        animals: {
          create: Array.from({ length: 5 }).map(() => ({
            name: faker.animal.type(),
            species: faker.animal.type()
          }))
        }
      }))
    },
    employees: {
      create: Array.from({ length: 5 }).map(() => ({
        name: faker.name.fullName(),
        role: faker.name.jobTitle()
      }))
    }
  }));

  for (const zoo of zooData) {
    console.log('Creating zoo:', zoo.name);
    await prisma.zoo.create({
      data: zoo
    });
    console.log('Zoo created:', zoo.name);
  }
}

main()
  .then(() => {
    console.log('Database seeded with faker data');
  })
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

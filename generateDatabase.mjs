import faker from "faker";
import fs from "fs";

const DB_NAME = "db.json";

const generatePersons = (numberOfPersons = 20) => {
  const persons = [];

  if (!numberOfPersons) return persons;

  for (let i = 0; i < numberOfPersons; i++) {
    persons.push({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      description: faker.lorem.paragraph(),
      profilePicture: faker.image.avatar(),
      email: faker.internet.email(),
      country: faker.address.country(),
      createdAt: faker.date.past(),
      archived: Math.random() > 0.2,
    });
  }

  return persons;
};

const generate = () => {
  const users = generatePersons();

  return JSON.stringify({
    users,
  });
};

fs.writeFileSync(DB_NAME, generate());

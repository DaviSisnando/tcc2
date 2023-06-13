require('dotenv').config();
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

const User = require('../models/User');

const randomInt = (max = 1) => {
  return Math.trunc(Math.random() * (max + 1))
}

const factoryUser = () => {
  const ROLE = [
    'Funcionário',
    'Professor',
    'Diretor',
    'Estagiário',
    'Bolsista',
  ];

  const STATUS = [
    'Ativo',
    'Férias',
    'Afastado',
    'Desligado',
    'Aposentado',
  ];

  const MARITALSTATUS = [
    'Solteiro',
    'Casado',
    'Viúvo',
    'União estável',
    'Divorciado',
  ];

  const user = {
    name: faker.name.findName(),
    dateOfBirth: new Date(faker.date.birthdate()),
    role: ROLE[randomInt(4)],
    status: STATUS[randomInt(4)],
    registration: faker.datatype.number({ min: 10000000000, max: 99999999999 }),
    bankAccount: 'bank',
    maritalStatus: MARITALSTATUS[randomInt(4)],
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumber(),
    password: '12345',
    email: `${faker.datatype.uuid()}@${faker.datatype.uuid()}.com`,
    filename: 'a'
  }

  return user;
}

const createUsers = async (quantity = 100) => {
  const users = [];
  for (let i = 0; i < quantity; i++) users.push(factoryUser());
  await User.create(users);
}

const run = async () => {
  await createUsers(),
  
  console.log('Created 100 users');
}

const clear = async () => {
  await User.deleteMany();
  console.log('Delete all document ☢');
}

mongoose.connect(process.env.DB_CONNECT, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.on('error', (err) => console.log(`connection error: ${err}`));
mongoose.connection.on('disconnected', () => console.log('Application desconnected to database'));
mongoose.connection.on('connected', async () => {
  console.log('Application connected to database')
  await clear();
  await run();
  process.exit(0);
});

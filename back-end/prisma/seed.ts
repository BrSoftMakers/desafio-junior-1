import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const clients = [
  {
    name: 'Rex',
    owner: 'João',
    nascimento: '2020-01-15',
    animal: 'cachorro',
    raca: 'Labrador',
    ownerPhone: '123456789',
  },
  {
    name: 'Whiskers',
    owner: 'Maria',
    nascimento: '2018-05-20',
    animal: 'gato',
    raca: 'Siamês',
    ownerPhone: '987654321',
  },
  {
    name: 'Bolinha',
    owner: 'Pedro',
    nascimento: '2019-11-10',
    animal: 'cachorro',
    raca: 'Poodle',
    ownerPhone: '555444333',
  },
  {
    name: 'Frajola',
    owner: 'Carla',
    nascimento: '2017-07-03',
    animal: 'gato',
    raca: 'Persa',
    ownerPhone: '999888777',
  },
  {
    name: 'Thor',
    owner: 'Luiz',
    nascimento: '2016-09-25',
    animal: 'cachorro',
    raca: 'Pastor Alemão',
    ownerPhone: '111222333',
  },
  {
    name: 'Mimi',
    owner: 'Ana',
    nascimento: '2018-03-12',
    animal: 'gato',
    raca: 'Angorá',
    ownerPhone: '666777888',
  },
  {
    name: 'Mel',
    owner: 'Lucas',
    nascimento: '2019-08-05',
    animal: 'cachorro',
    raca: 'Golden Retriever',
    ownerPhone: '444555666',
  },
  {
    name: 'Luna',
    owner: 'Amanda',
    nascimento: '2021-02-28',
    animal: 'cachorro',
    raca: 'Shih Tzu',
    ownerPhone: '777888999',
  },
  {
    name: 'Felix',
    owner: 'Fernanda',
    nascimento: '2020-04-17',
    animal: 'gato',
    raca: 'Maine Coon',
    ownerPhone: '222333444',
  },
  {
    name: 'Buddy',
    owner: 'Gabriel',
    nascimento: '2015-12-30',
    animal: 'cachorro',
    raca: 'Bulldog',
    ownerPhone: '888999000',
  },
  {
    name: 'Nina',
    owner: 'Patrícia',
    nascimento: '2019-06-08',
    animal: 'cachorro',
    raca: 'Dachshund',
    ownerPhone: '333444555',
  },
  {
    name: 'Simba',
    owner: 'Rafaela',
    nascimento: '2017-04-23',
    animal: 'gato',
    raca: 'Ragdoll',
    ownerPhone: '999000111',
  },
  {
    name: 'Max',
    owner: 'Hugo',
    nascimento: '2018-10-11',
    animal: 'cachorro',
    raca: 'Boxer',
    ownerPhone: '111222333',
  },
  {
    name: 'Lilo',
    owner: 'Isabela',
    nascimento: '2019-03-08',
    animal: 'cachorro',
    raca: 'Cocker Spaniel',
    ownerPhone: '555666777',
  },
  {
    name: 'Lola',
    owner: 'Vanessa',
    nascimento: '2016-07-20',
    animal: 'cachorro',
    raca: 'Chihuahua',
    ownerPhone: '222333444',
  },
  {
    name: 'Toby',
    owner: 'Daniel',
    nascimento: '2017-09-14',
    animal: 'cachorro',
    raca: 'Beagle',
    ownerPhone: '888999000',
  },
  {
    name: 'Oliver',
    owner: 'Caroline',
    nascimento: '2020-05-30',
    animal: 'gato',
    raca: 'British Shorthair',
    ownerPhone: '333444555',
  },
  {
    name: 'Rocky',
    owner: 'Sandra',
    nascimento: '2018-12-03',
    animal: 'cachorro',
    raca: 'Rottweiler',
    ownerPhone: '999000111',
  },
  {
    name: 'Mia',
    owner: 'Eduardo',
    nascimento: '2019-02-18',
    animal: 'gato',
    raca: 'Bengal',
    ownerPhone: '111222333',
  },
  {
    name: 'Charlie',
    owner: 'Marcela',
    nascimento: '2017-06-05',
    animal: 'cachorro',
    raca: 'Labrador',
    ownerPhone: '666777888',
  },
];

const seed = async () => {
  for (const client of clients) {
    await prisma.client.create({
      data: client,
    });
  }
  console.log('Seed concluidas');
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

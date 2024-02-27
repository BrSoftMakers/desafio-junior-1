import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { PrismaService } from 'src/database/prisma.service';

describe('ClientService', () => {
  let service: ClientService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: PrismaService,
          useValue: {
            client: {
              findFirst: jest.fn(),
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new client', async () => {
      const clientData = {
        name: 'Test Client',
        owner: 'Test Owner',
        nascimento: '01/01/2022',
        animal: 'Cachorro',
        raca: 'Golden Retriever',
        ownerPhone: '123-456-7890',
      };

      const expectedResult = { id: 1, ownerId: 1, ...clientData }; // Incluída a propriedade ownerId

      jest.spyOn(prismaService.client, 'findFirst').mockResolvedValue(null);
      jest
        .spyOn(prismaService.client, 'create')
        .mockResolvedValue(expectedResult);

      const result = await service.create(clientData);

      expect(result).toEqual(expectedResult);
    });

    it('should throw an error if client already exists', async () => {
      const clientData = {
        name: 'Test Client',
        owner: 'Test Owner',
        nascimento: '01/01/2022',
        animal: 'Cachorro',
        raca: 'Golden Retriever',
        ownerPhone: '123-456-7890',
        id: 1,
        ownerId: 1,
      };

      jest
        .spyOn(prismaService.client, 'findUnique')
        .mockResolvedValue(clientData);
      await expect(service.create(clientData)).rejects.toThrowError(
        'client already exists',
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of clients', async () => {
      const clients = [
        {
          id: 1,
          ownerId: 1,
          owner: 'charles',
          name: 'Client 1',
          nascimento: '01/01/2022',
          animal: 'Cachorro',
          raca: 'Golden Retriever',
          ownerPhone: '123-456-7890',
        },
        {
          id: 2,
          ownerId: 2,
          owner: 'asdo',
          name: 'Client 2',
          nascimento: '02/01/2022',
          animal: 'Gato',
          raca: 'Persa',
          ownerPhone: '987-654-3210',
        },
      ];
      jest.spyOn(prismaService.client, 'findMany').mockResolvedValue(clients);

      const result = await service.findALl();

      expect(result).toEqual(clients);
    });
  });

  describe('update', () => {
    it('should update a client', async () => {
      const clientId = 1;
      const ownerId = 1;
      const clientData = {
        id: clientId,
        ownerId: ownerId,
        name: 'Updated Client',
        owner: 'Test Owner',
        nascimento: '01/01/2022',
        animal: 'Cachorro',
        raca: 'Golden Retriever',
        ownerPhone: '123-456-7890',
      };
      const updatedClient = { id: clientId, ...clientData };

      jest
        .spyOn(prismaService.client, 'findUnique')
        .mockResolvedValue({ ...clientData });

      jest
        .spyOn(prismaService.client, 'update')
        .mockResolvedValue(updatedClient);

      const result = await service.update(clientId, ownerId, clientData);

      expect(result).toEqual(updatedClient);
    });

    it('should throw an error if client does not exist', async () => {
      const clientId = 1;
      const ownerId = 1;
      const clientData = {
        id: clientId,
        ownerId: ownerId,
        name: 'Updated Client',
        owner: 'Test Owner',
        nascimento: '01/01/2022',
        animal: 'Cachorro',
        raca: 'Golden Retriever',
        ownerPhone: '123-456-7890',
      };

      jest.spyOn(prismaService.client, 'findUnique').mockResolvedValue(null);
      await expect(
        service.update(clientId, ownerId, clientData),
      ).rejects.toThrowError('Client does not exists!');
    });
  });

  describe('update', () => {
    it('should update a client', async () => {
      const clientId = 1;
      const ownerId = 1;
      const clientData = {
        id: clientId,
        ownerId: ownerId,
        name: 'Updated Client',
        owner: 'Test Owner',
        nascimento: '01/01/2022',
        animal: 'Cachorro',
        raca: 'Golden Retriever',
        ownerPhone: '123-456-7890',
      };
      const updatedClient = { id: clientId, ...clientData };

      jest
        .spyOn(prismaService.client, 'findUnique')
        .mockResolvedValue({ ...clientData });

      jest
        .spyOn(prismaService.client, 'update')
        .mockResolvedValue(updatedClient);

      const result = await service.update(clientId, ownerId, clientData);

      expect(result).toEqual(updatedClient);
    });

    it('should throw an error if client does not exist', async () => {
      const clientId = 1;
      const ownerId = 1;
      const clientData = {
        id: clientId,
        ownerId: ownerId,
        name: 'Updated Client',
        owner: 'Test Owner',
        nascimento: '01/01/2022',
        animal: 'Cachorro',
        raca: 'Golden Retriever',
        ownerPhone: '123-456-7890',
      };

      jest.spyOn(prismaService.client, 'findUnique').mockResolvedValue(null);
      await expect(
        service.update(clientId, ownerId, clientData),
      ).rejects.toThrowError('Client does not exists!');
    });
  });
});

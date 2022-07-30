import { container } from "tsyringe";

import { OwnerRepository } from "../../modules/owners/infra/prisma/OwnerRepository";
import { IOwnerRepository } from "../../modules/owners/repositories/IOwnerRepository";

import { PetRepository } from "../../modules/pets/infra/prisma/PetRepository";
import { IPetRepository } from "../../modules/pets/repositories/IPetRepository";

import { UserRepository } from "../../modules/users/infra/prisma/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IPetRepository>(
  "PetRepository",
  PetRepository
);

container.registerSingleton<IOwnerRepository>(
  "OwnerRepository",
  OwnerRepository
)

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)

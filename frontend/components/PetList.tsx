'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Pet } from '../types/pet.d';
import PetCard from './PetCard';
import Modal from './Modal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import PetForm from './PetForm';

const mockPets: Pet[] = [
  {
    id: 1,
    nome: 'Simba Farias',
    tipo: 'gato',
    raca: 'Persa',
    idade: 2,
    donoId: 1,
    dono: {
      id: 1,
      nome: 'Emmanuel Farias',
      telefone: '(81) 9 8240-2134',
      endereco: 'Rua das Flores, 123'
    }
  },
  {
    id: 2,
    nome: 'Luna Oliveira',
    tipo: 'cachorro',
    raca: 'Golden Retriever',
    idade: 3,
    donoId: 2,
    dono: {
      id: 2,
      nome: 'Maria Oliveira',
      telefone: '(81) 9 9876-5432',
      endereco: 'Av. Principal, 456'
    }
  },
  {
    id: 3,
    nome: 'Max Silva',
    tipo: 'cachorro',
    raca: 'Labrador',
    idade: 1,
    donoId: 3,
    dono: {
      id: 3,
      nome: 'João Silva',
      telefone: '(81) 9 1234-5678',
      endereco: 'Rua do Campo, 789'
    }
  },
  {
    id: 4,
    nome: 'Mimi Costa',
    tipo: 'gato',
    raca: 'Siamês',
    idade: 4,
    donoId: 4,
    dono: {
      id: 4,
      nome: 'Ana Costa',
      telefone: '(81) 9 4567-8901',
      endereco: 'Rua das Palmeiras, 321'
    }
  },
  {
    id: 5,
    nome: 'Rocky Santos',
    tipo: 'cachorro',
    raca: 'Bulldog',
    idade: 2,
    donoId: 5,
    dono: {
      id: 5,
      nome: 'Carlos Santos',
      telefone: '(81) 9 2345-6789',
      endereco: 'Av. Central, 654'
    }
  },
  {
    id: 6,
    nome: 'Bella Ferreira',
    tipo: 'gato',
    raca: 'Maine Coon',
    idade: 3,
    donoId: 6,
    dono: {
      id: 6,
      nome: 'Lucia Ferreira',
      telefone: '(81) 9 8765-4321',
      endereco: 'Rua Nova, 987'
    }
  },
  {
    id: 7,
    nome: 'Thor Almeida',
    tipo: 'cachorro',
    raca: 'Pastor Alemão',
    idade: 4,
    donoId: 7,
    dono: {
      id: 7,
      nome: 'Pedro Almeida',
      telefone: '(81) 9 1357-2468',
      endereco: 'Rua dos Ipês, 159'
    }
  },
  {
    id: 8,
    nome: 'Lola Martins',
    tipo: 'gato',
    raca: 'Ragdoll',
    idade: 2,
    donoId: 8,
    dono: {
      id: 8,
      nome: 'Sandra Martins',
      telefone: '(81) 9 9753-1864',
      endereco: 'Av. das Américas, 741'
    }
  },
  {
    id: 9,
    nome: 'Bento Lima',
    tipo: 'cachorro',
    raca: 'Beagle',
    idade: 1,
    donoId: 9,
    dono: {
      id: 9,
      nome: 'Roberto Lima',
      telefone: '(81) 9 8642-9753',
      endereco: 'Rua do Sol, 852'
    }
  },
  {
    id: 10,
    nome: 'Nina Rocha',
    tipo: 'gato',
    raca: 'British Shorthair',
    idade: 3,
    donoId: 10,
    dono: {
      id: 10,
      nome: 'Carla Rocha',
      telefone: '(81) 9 7531-8642',
      endereco: 'Rua da Paz, 963'
    }
  },
  {
    id: 11,
    nome: 'Zeus Barbosa',
    tipo: 'cachorro',
    raca: 'Rottweiler',
    idade: 5,
    donoId: 11,
    dono: {
      id: 11,
      nome: 'Fernando Barbosa',
      telefone: '(81) 9 6420-9753',
      endereco: 'Av. Brasil, 147'
    }
  },
  {
    id: 12,
    nome: 'Mel Carvalho',
    tipo: 'gato',
    raca: 'Angorá',
    idade: 2,
    donoId: 12,
    dono: {
      id: 12,
      nome: 'Patricia Carvalho',
      telefone: '(81) 9 5309-7642',
      endereco: 'Rua Verde, 258'
    }
  },
  {
    id: 13,
    nome: 'Rex Moreira',
    tipo: 'cachorro',
    raca: 'Doberman',
    idade: 3,
    donoId: 13,
    dono: {
      id: 13,
      nome: 'Marcos Moreira',
      telefone: '(81) 9 4208-6531',
      endereco: 'Rua Azul, 369'
    }
  },
  {
    id: 14,
    nome: 'Chloe Dias',
    tipo: 'gato',
    raca: 'Sphynx',
    idade: 1,
    donoId: 14,
    dono: {
      id: 14,
      nome: 'Julia Dias',
      telefone: '(81) 9 3197-5420',
      endereco: 'Av. Amarela, 471'
    }
  },
  {
    id: 15,
    nome: 'Duke Pereira',
    tipo: 'cachorro',
    raca: 'Husky Siberiano',
    idade: 4,
    donoId: 15,
    dono: {
      id: 15,
      nome: 'Rafael Pereira',
      telefone: '(81) 9 2086-4197',
      endereco: 'Rua Violeta, 582'
    }
  },
  {
    id: 16,
    nome: 'Zara Gomes',
    tipo: 'gato',
    raca: 'Bengala',
    idade: 2,
    donoId: 16,
    dono: {
      id: 16,
      nome: 'Amanda Gomes',
      telefone: '(81) 9 1975-2086',
      endereco: 'Av. Rosa, 693'
    }
  },
  {
    id: 17,
    nome: 'Bolt Mendes',
    tipo: 'cachorro',
    raca: 'Border Collie',
    idade: 3,
    donoId: 17,
    dono: {
      id: 17,
      nome: 'Luciano Mendes',
      telefone: '(81) 9 3456-7890',
      endereco: 'Rua dos Ventos, 147'
    }
  },
  {
    id: 18,
    nome: 'Pipoca Ribeiro',
    tipo: 'gato',
    raca: 'Vira-lata',
    idade: 1,
    donoId: 18,
    dono: {
      id: 18,
      nome: 'Helena Ribeiro',
      telefone: '(81) 9 4567-8901',
      endereco: 'Av. das Estrelas, 258'
    }
  },
  {
    id: 19,
    nome: 'Toby Cardoso',
    tipo: 'cachorro',
    raca: 'Cocker Spaniel',
    idade: 4,
    donoId: 19,
    dono: {
      id: 19,
      nome: 'Gabriel Cardoso',
      telefone: '(81) 9 5678-9012',
      endereco: 'Rua do Mar, 369'
    }
  },
  {
    id: 20,
    nome: 'Luna Azul',
    tipo: 'gato',
    raca: 'Azul Russo',
    idade: 2,
    donoId: 20,
    dono: {
      id: 20,
      nome: 'Isabella Cruz',
      telefone: '(81) 9 6789-0123',
      endereco: 'Av. Lunar, 471'
    }
  },
  {
    id: 21,
    nome: 'Brutus Xavier',
    tipo: 'cachorro',
    raca: 'Mastiff',
    idade: 5,
    donoId: 21,
    dono: {
      id: 21,
      nome: 'Rodrigo Xavier',
      telefone: '(81) 9 7890-1234',
      endereco: 'Rua Forte, 582'
    }
  },
  {
    id: 22,
    nome: 'Nala Teixeira',
    tipo: 'gato',
    raca: 'Abissínio',
    idade: 3,
    donoId: 22,
    dono: {
      id: 22,
      nome: 'Beatriz Teixeira',
      telefone: '(81) 9 8901-2345',
      endereco: 'Av. Dourada, 693'
    }
  },
  {
    id: 23,
    nome: 'Jack Pinheiro',
    tipo: 'cachorro',
    raca: 'Jack Russell',
    idade: 2,
    donoId: 23,
    dono: {
      id: 23,
      nome: 'Thiago Pinheiro',
      telefone: '(81) 9 9012-3456',
      endereco: 'Rua Alegre, 147'
    }
  },
  {
    id: 24,
    nome: 'Mia Soares',
    tipo: 'gato',
    raca: 'Munchkin',
    idade: 1,
    donoId: 24,
    dono: {
      id: 24,
      nome: 'Camila Soares',
      telefone: '(81) 9 0123-4567',
      endereco: 'Av. Pequena, 258'
    }
  },
  {
    id: 25,
    nome: 'Baxter Nunes',
    tipo: 'cachorro',
    raca: 'Basset Hound',
    idade: 4,
    donoId: 25,
    dono: {
      id: 25,
      nome: 'Leonardo Nunes',
      telefone: '(81) 9 1234-5678',
      endereco: 'Rua Comprida, 369'
    }
  },
  {
    id: 26,
    nome: 'Cleo Machado',
    tipo: 'gato',
    raca: 'Egípcio Mau',
    idade: 3,
    donoId: 26,
    dono: {
      id: 26,
      nome: 'Fernanda Machado',
      telefone: '(81) 9 2345-6789',
      endereco: 'Av. Antiga, 471'
    }
  },
  {
    id: 27,
    nome: 'Diesel Moura',
    tipo: 'cachorro',
    raca: 'Pitbull',
    idade: 3,
    donoId: 27,
    dono: {
      id: 27,
      nome: 'Bruno Moura',
      telefone: '(81) 9 3456-7890',
      endereco: 'Rua Potente, 582'
    }
  },
  {
    id: 28,
    nome: 'Kira Monteiro',
    tipo: 'gato',
    raca: 'Somali',
    idade: 2,
    donoId: 28,
    dono: {
      id: 28,
      nome: 'Larissa Monteiro',
      telefone: '(81) 9 4567-8901',
      endereco: 'Av. Selvagem, 693'
    }
  },
  {
    id: 29,
    nome: 'Oscar Viana',
    tipo: 'cachorro',
    raca: 'Schnauzer',
    idade: 4,
    donoId: 29,
    dono: {
      id: 29,
      nome: 'Ricardo Viana',
      telefone: '(81) 9 5678-9012',
      endereco: 'Rua Elegante, 147'
    }
  },
  {
    id: 30,
    nome: 'Stella Campos',
    tipo: 'gato',
    raca: 'Oriental',
    idade: 1,
    donoId: 30,
    dono: {
      id: 30,
      nome: 'Mariana Campos',
      telefone: '(81) 9 6789-0123',
      endereco: 'Av. Brilhante, 258'
    }
  },
  {
    id: 31,
    nome: 'Ranger Torres',
    tipo: 'cachorro',
    raca: 'Australian Shepherd',
    idade: 5,
    donoId: 31,
    dono: {
      id: 31,
      nome: 'Felipe Torres',
      telefone: '(81) 9 7890-1234',
      endereco: 'Rua Aventura, 369'
    }
  },
  {
    id: 32,
    nome: 'Jade Castro',
    tipo: 'gato',
    raca: 'Burmês',
    idade: 3,
    donoId: 32,
    dono: {
      id: 32,
      nome: 'Natália Castro',
      telefone: '(81) 9 8901-2345',
      endereco: 'Av. Preciosa, 471'
    }
  },
  {
    id: 33,
    nome: 'Apollo Duarte',
    tipo: 'cachorro',
    raca: 'Dogue Alemão',
    idade: 2,
    donoId: 33,
    dono: {
      id: 33,
      nome: 'André Duarte',
      telefone: '(81) 9 9012-3456',
      endereco: 'Rua Majestosa, 582'
    }
  },
  {
    id: 34,
    nome: 'Safira Braga',
    tipo: 'gato',
    raca: 'Chartreux',
    idade: 4,
    donoId: 34,
    dono: {
      id: 34,
      nome: 'Juliana Braga',
      telefone: '(81) 9 0123-4567',
      endereco: 'Av. Azul Profundo, 693'
    }
  },
  {
    id: 35,
    nome: 'Rusty Fonseca',
    tipo: 'cachorro',
    raca: 'Setter Irlandês',
    idade: 3,
    donoId: 35,
    dono: {
      id: 35,
      nome: 'Marcos Fonseca',
      telefone: '(81) 9 1234-5678',
      endereco: 'Rua Ferrugem, 147'
    }
  },
  {
    id: 36,
    nome: 'Venus Leal',
    tipo: 'gato',
    raca: 'Turkish Van',
    idade: 1,
    donoId: 36,
    dono: {
      id: 36,
      nome: 'Priscila Leal',
      telefone: '(81) 9 2345-6789',
      endereco: 'Av. Divina, 258'
    }
  },
  {
    id: 37,
    nome: 'Hunter Morais',
    tipo: 'cachorro',
    raca: 'Rhodesian Ridgeback',
    idade: 4,
    donoId: 37,
    dono: {
      id: 37,
      nome: 'Diego Morais',
      telefone: '(81) 9 3456-7890',
      endereco: 'Rua Caçador, 369'
    }
  },
  {
    id: 38,
    nome: 'Morgana Reis',
    tipo: 'gato',
    raca: 'Korat',
    idade: 2,
    donoId: 38,
    dono: {
      id: 38,
      nome: 'Vanessa Reis',
      telefone: '(81) 9 4567-8901',
      endereco: 'Av. Mística, 471'
    }
  },
  {
    id: 39,
    nome: 'Titan Correia',
    tipo: 'cachorro',
    raca: 'Mastim Napolitano',
    idade: 5,
    donoId: 39,
    dono: {
      id: 39,
      nome: 'Gustavo Correia',
      telefone: '(81) 9 5678-9012',
      endereco: 'Rua Titânica, 582'
    }
  },
  {
    id: 40,
    nome: 'Athena Ramos',
    tipo: 'gato',
    raca: 'Toyger',
    idade: 3,
    donoId: 40,
    dono: {
      id: 40,
      nome: 'Carla Ramos',
      telefone: '(81) 9 6789-0123',
      endereco: 'Av. Sabedoria, 693'
    }
  },
  {
    id: 41,
    nome: 'Storm Aragão',
    tipo: 'cachorro',
    raca: 'Weimaraner',
    idade: 2,
    donoId: 41,
    dono: {
      id: 41,
      nome: 'Paulo Aragão',
      telefone: '(81) 9 7890-1234',
      endereco: 'Rua Tempestade, 147'
    }
  },
  {
    id: 42,
    nome: 'Isis Tavares',
    tipo: 'gato',
    raca: 'Peterbald',
    idade: 1,
    donoId: 42,
    dono: {
      id: 42,
      nome: 'Renata Tavares',
      telefone: '(81) 9 8901-2345',
      endereco: 'Av. Misteriosa, 258'
    }
  },
  {
    id: 43,
    nome: 'Neo Ferraz',
    tipo: 'cachorro',
    raca: 'Vizsla',
    idade: 3,
    donoId: 43,
    dono: {
      id: 43,
      nome: 'Eduardo Ferraz',
      telefone: '(81) 9 9012-3456',
      endereco: 'Rua Moderna, 369'
    }
  },
  {
    id: 44,
    nome: 'Pandora Cunha',
    tipo: 'gato',
    raca: 'LaPerm',
    idade: 4,
    donoId: 44,
    dono: {
      id: 44,
      nome: 'Tatiana Cunha',
      telefone: '(81) 9 0123-4567',
      endereco: 'Av. Enigmática, 471'
    }
  },
  {
    id: 45,
    nome: 'Blaze Santana',
    tipo: 'cachorro',
    raca: 'Pointer',
    idade: 4,
    donoId: 45,
    dono: {
      id: 45,
      nome: 'Raul Santana',
      telefone: '(81) 9 1234-5678',
      endereco: 'Rua Chama, 582'
    }
  },
  {
    id: 46,
    nome: 'Electra Silva',
    tipo: 'gato',
    raca: 'Selkirk Rex',
    idade: 2,
    donoId: 46,
    dono: {
      id: 46,
      nome: 'Mônica Silva',
      telefone: '(81) 9 2345-6789',
      endereco: 'Av. Elétrica, 693'
    }
  },
  {
    id: 47,
    nome: 'Maverick Lima',
    tipo: 'cachorro',
    raca: 'Brittany',
    idade: 3,
    donoId: 47,
    dono: {
      id: 47,
      nome: 'Alexandre Lima',
      telefone: '(81) 9 3456-7890',
      endereco: 'Rua Rebelde, 147'
    }
  },
  {
    id: 48,
    nome: 'Seraphina Costa',
    tipo: 'gato',
    raca: 'Cymric',
    idade: 1,
    donoId: 48,
    dono: {
      id: 48,
      nome: 'Adriana Costa',
      telefone: '(81) 9 4567-8901',
      endereco: 'Av. Angélica, 258'
    }
  },
  {
    id: 49,
    nome: 'Phoenix Alves',
    tipo: 'cachorro',
    raca: 'Pharaoh Hound',
    idade: 2,
    donoId: 49,
    dono: {
      id: 49,
      nome: 'Vinícius Alves',
      telefone: '(81) 9 5678-9012',
      endereco: 'Rua Renascimento, 369'
    }
  },
  {
    id: 50,
    nome: 'Aurora Mendes',
    tipo: 'gato',
    raca: 'American Curl',
    idade: 3,
    donoId: 50,
    dono: {
      id: 50,
      nome: 'Gabriela Mendes',
      telefone: '(81) 9 6789-0123',
      endereco: 'Av. Aurora, 471'
    }
  },
  {
    id: 51,
    nome: 'Rebel Cardoso',
    tipo: 'cachorro',
    raca: 'Basenji',
    idade: 4,
    donoId: 51,
    dono: {
      id: 51,
      nome: 'Leandro Cardoso',
      telefone: '(81) 9 7890-1234',
      endereco: 'Rua Revolução, 582'
    }
  },
  {
    id: 52,
    nome: 'Mystique Rocha',
    tipo: 'gato',
    raca: 'Ocicat',
    idade: 2,
    donoId: 52,
    dono: {
      id: 52,
      nome: 'Patrícia Rocha',
      telefone: '(81) 9 8901-2345',
      endereco: 'Av. Mistério, 693'
    }
  },
  {
    id: 53,
    nome: 'Atlas Barbosa',
    tipo: 'cachorro',
    raca: 'Cane Corso',
    idade: 5,
    donoId: 53,
    dono: {
      id: 53,
      nome: 'Roberto Barbosa',
      telefone: '(81) 9 9012-3456',
      endereco: 'Rua Mundial, 147'
    }
  },
  {
    id: 54,
    nome: 'Karma Oliveira',
    tipo: 'gato',
    raca: 'Manx',
    idade: 1,
    donoId: 54,
    dono: {
      id: 54,
      nome: 'Luciana Oliveira',
      telefone: '(81) 9 0123-4567',
      endereco: 'Av. Destino, 258'
    }
  },
  {
    id: 55,
    nome: 'Orion Santos',
    tipo: 'cachorro',
    raca: 'Saluki',
    idade: 3,
    donoId: 55,
    dono: {
      id: 55,
      nome: 'Márcio Santos',
      telefone: '(81) 9 1234-5678',
      endereco: 'Rua Estelar, 369'
    }
  },
  {
    id: 56,
    nome: 'Luna Nova',
    tipo: 'gato',
    raca: 'Snowshoe',
    idade: 4,
    donoId: 56,
    dono: {
      id: 56,
      nome: 'Daniela Nova',
      telefone: '(81) 9 2345-6789',
      endereco: 'Av. Crescente, 471'
    }
  },
  {
    id: 57,
    nome: 'Vega Pereira',
    tipo: 'cachorro',
    raca: 'Afghan Hound',
    idade: 2,
    donoId: 57,
    dono: {
      id: 57,
      nome: 'Cristiano Pereira',
      telefone: '(81) 9 3456-7890',
      endereco: 'Rua Brilhante, 582'
    }
  },
  {
    id: 58,
    nome: 'Eclipse Gomes',
    tipo: 'gato',
    raca: 'Highlander',
    idade: 3,
    donoId: 58,
    dono: {
      id: 58,
      nome: 'Simone Gomes',
      telefone: '(81) 9 4567-8901',
      endereco: 'Av. Sombra, 693'
    }
  },
  {
    id: 59,
    nome: 'Comet Martins',
    tipo: 'cachorro',
    raca: 'Azawakh',
    idade: 4,
    donoId: 59,
    dono: {
      id: 59,
      nome: 'Henrique Martins',
      telefone: '(81) 9 5678-9012',
      endereco: 'Rua Veloz, 147'
    }
  },
  {
    id: 60,
    nome: 'Nebula Ferreira',
    tipo: 'gato',
    raca: 'Pixie-bob',
    idade: 1,
    donoId: 60,
    dono: {
      id: 60,
      nome: 'Carolina Ferreira',
      telefone: '(81) 9 6789-0123',
      endereco: 'Av. Galáctica, 258'
    }
  },
  {
    id: 61,
    nome: 'Quantum Silva',
    tipo: 'cachorro',
    raca: 'Xolo',
    idade: 3,
    donoId: 61,
    dono: {
      id: 61,
      nome: 'Fernando Silva',
      telefone: '(81) 9 7890-1234',
      endereco: 'Rua Quântica, 369'
    }
  },
  {
    id: 62,
    nome: 'Zenith Costa',
    tipo: 'gato',
    raca: 'Singapura',
    idade: 2,
    donoId: 62,
    dono: {
      id: 62,
      nome: 'Viviane Costa',
      telefone: '(81) 9 8901-2345',
      endereco: 'Av. Pico, 471'
    }
  },
  {
    id: 63,
    nome: 'Galaxy Moreira',
    tipo: 'cachorro',
    raca: 'Telomian',
    idade: 4,
    donoId: 63,
    dono: {
      id: 63,
      nome: 'Sérgio Moreira',
      telefone: '(81) 9 9012-3456',
      endereco: 'Rua Infinita, 582'
    }
  },
  {
    id: 64,
    nome: 'Stardust Dias',
    tipo: 'gato',
    raca: 'Lykoi',
    idade: 1,
    donoId: 64,
    dono: {
      id: 64,
      nome: 'Michelle Dias',
      telefone: '(81) 9 0123-4567',
      endereco: 'Av. Estelar, 693'
    }
  }
];

function PetList() {
  const [pets, setPets] = useState<Pet[]>(mockPets);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const openCreateModal = () => {
    setSelectedPet(null);
    setIsCreateModalOpen(true);
  };

  const openEditModal = (pet: Pet) => {
    setSelectedPet(pet);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (pet: Pet) => {
    setSelectedPet(pet);
    setIsDeleteModalOpen(true);
  };

  const closeAllModals = () => {
    setIsCreateModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedPet(null);
  };

  const handleDeletePet = () => {
    if (selectedPet) {
      setPets(pets.filter(p => p.id !== selectedPet.id));
      closeAllModals();
    }
  };

  const handleSavePet = (petData: Pet) => {
    if (!selectedPet) {
      const newId = Math.max(...pets.map(p => p.id)) + 1;
      const newPet = { ...petData, id: newId };
      setPets([...pets, newPet]);
    } else {
      const updatedPet = { ...petData, id: selectedPet.id };
      setPets(pets.map(pet => pet.id === selectedPet.id ? updatedPet : pet));
    }
    closeAllModals();
  };

  const filteredPets = pets.filter(pet => 
    pet.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.dono?.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPets = filteredPets.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="min-h-screen p-8">
      {/* Header com Logo SoftPet */}
      <div className="mb-12">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3" style={{ width: '1257px' }}>
            <Image 
              src="/logomarca.png" 
              alt="SoftPet Logo" 
              width={61} 
              height={48}
              style={{
                width: '61px',
                height: '48px'
              }}
            />
            <h1 
              className="text-white"
              style={{
                fontSize: '30px',
                fontWeight: '500',
                fontFamily: 'Ubuntu, sans-serif',
                lineHeight: '100%',
                color: '#FFFFFF'
              }}
            >
              SoftPet
            </h1>
          </div>
        </div>

        {/* Controles de Busca e Cadastro */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {/* Campo de busca - Ajustado para o layout */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome do pet ou dono..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-[15px] bg-transparent border-[3px] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#00CAFC]/50 focus:border-[#00CAFC]"
              style={{ 
                width: '1059px', 
                height: '50px',
                borderRadius: '15px',
                border: '3px solid #404A5C',
                paddingLeft: '52px',
                paddingRight: '120px'
              }}
            />
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="5" fill="#404A5C"/>
                <path d="M30.5 29L26.18 24.68C27.12 23.34 28 21.64 28 19.8C28 15.6 24.6 12.2 20.4 12.2C16.2 12.2 12.8 15.6 12.8 19.8C12.8 24 16.2 27.4 20.4 27.4C22.24 27.4 23.94 26.52 25.28 25.58L29.6 29.9L30.5 29ZM20.4 25.8C17.08 25.8 14.4 23.12 14.4 19.8C14.4 16.48 17.08 13.8 20.4 13.8C23.72 13.8 26.4 16.48 26.4 19.8C26.4 23.12 23.72 25.8 20.4 25.8Z" fill="white"/>
              </svg>
            </div>
            
            {/* Botão Pesquisar */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <button
                type="button"
                className="bg-[#404A5C] text-white rounded-[5px] border-l-[3px] border-[#404A5C] hover:bg-[#4A5563] transition-colors duration-200"
                style={{
                  width: '106px',
                  height: '36px',
                  fontSize: '16px',
                  fontWeight: '700',
                  fontFamily: 'Ubuntu, sans-serif',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '5px'
                }}
              >
                Pesquisar
              </button>
            </div>
          </div>

          {/* Botão de cadastrar - Ajustado conforme Figma */}
          <div>
            <button
              onClick={openCreateModal}
              className="bg-gradient-to-r from-[#00CAFC] to-[#0056E2] text-white hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{
                width: '156px',
                height: '50px',
                fontSize: '16px',
                fontWeight: '700',
                fontFamily: 'Ubuntu, sans-serif',
                lineHeight: '100%',
                letterSpacing: '0%',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image 
                src="/adicionar.png" 
                alt="Adicionar" 
                width={20} 
                height={20}
                style={{
                  width: '20px',
                  height: '20px'
                }}
              />
              <span>Cadastrar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid de Pets */}
      <div className="max-w-7xl mx-auto">
        {filteredPets.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-white/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-white/70 text-lg">Nenhum pet encontrado</p>
          </div>
        ) : (
          <>
            <div className="flex justify-center">
              <div 
                className="grid grid-cols-4 gap-4"
                style={{ 
                  width: '1257px', 
                  height: '431px',
                  boxSizing: 'border-box'
                }}
              >
                {currentPets.map((pet: Pet) => (
                  <PetCard
                    key={pet.id}
                    pet={pet}
                    onEdit={openEditModal}
                    onDelete={openDeleteModal}
                  />
                ))}
              </div>
            </div>

            {/* Componente de Paginação */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex justify-end" style={{ width: '1257px' }}>
                  <div 
                    className="flex items-center"
                    style={{
                      width: '125px',
                      height: '23px',
                      gap: '0px'
                    }}
                  >
                    {/* Botão Página Anterior */}
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-200"
                      style={{
                        width: '22px',
                        height: '18px'
                      }}
                    >
                      <Image 
                        src="/seta-esquerda.png" 
                        alt="Página Anterior" 
                        width={22}
                        height={18}
                        style={{
                          width: '22px',
                          height: '18px'
                        }}
                      />
                    </button>

                    {/* Texto "1 de 4" */}
                    <div 
                      className="flex items-center justify-center text-white"
                      style={{
                        width: '72px',
                        height: '23px',
                        fontSize: '18px',
                        fontWeight: '700',
                        fontFamily: 'Ubuntu, sans-serif',
                        lineHeight: '100%',
                        color: '#FFFFFF'
                      }}
                    >
                      {currentPage} de {totalPages}
                    </div>

                    {/* Botão Próxima Página */}
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-200"
                      style={{
                        width: '22px',
                        height: '18px'
                      }}
                    >
                      <Image 
                        src="/seta-direita.png" 
                        alt="Próxima Página" 
                        width={22}
                        height={18}
                        style={{
                          width: '22px',
                          height: '18px'
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal para criar pet */}
      <Modal 
        isOpen={isCreateModalOpen} 
        onClose={closeAllModals}
      >
        <PetForm
          pet={null}
          onSubmit={handleSavePet}
        />
      </Modal>

      {/* Modal para editar pet */}
      <EditModal 
        isOpen={isEditModalOpen} 
        onClose={closeAllModals}
      >
        <PetForm
          pet={selectedPet}
          onSubmit={handleSavePet}
        />
      </EditModal>

      {/* Modal para deletar pet */}
      <DeleteModal 
        isOpen={isDeleteModalOpen} 
        onClose={closeAllModals}
        pet={selectedPet}
        onConfirm={handleDeletePet}
      />
    </div>
  );
}

export default PetList;

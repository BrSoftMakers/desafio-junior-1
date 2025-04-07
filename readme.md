# 🐶 Petshop - Desafio Fullstack Júnior

Este repositório contém a implementação do desafio proposto para a vaga de Desenvolvedor Fullstack Júnior. A aplicação permite listar, visualizar, criar, editar e remover animais de estimação de uma petshop, além de armazenar os dados de seus respectivos donos.

## 📌 Tecnologias Utilizadas

- **Frontend:** [Next.js](https://nextjs.org/)
- **Backend:** [NestJS](https://nestjs.com/)
- **Banco de Dados:** PostgreSQL
- **Containerização:** Docker + Docker Compose
- **Documentação da API:** Swagger

## 🔧 Como rodar o projeto localmente

Certifique-se de ter o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/) instalados em sua máquina.

### Passo a passo

1. **Clone o repositório:**

  git clone git@github.com:ts-dart/desafio-junior-1.git
  cd nome-do-repositorio

2. **Inicie os containers:**

  docker-compose up --build

3. **Acesse os serviços:**

Frontend (Next.js): http://localhost:3000

Backend (NestJS): http://localhost:1881/pets

Swagger (Documentação da API): http://localhost:1881/api

📄 Funcionalidades
Cadastro de animais de estimação (nome, idade, tipo e raça)

Cadastro de informações do dono (dados pessoais, contato e endereço)

Listagem e visualização de pets

Edição e remoção de pets

📝 Observações
O projeto foi desenvolvido de forma inspirada no [Protótipo Figma](https://www.figma.com/design/z0zYWFHb7OK6TUXDBBw5my/SoftMakers-Challenges--Dev-Jr.?node-id=0-1&p=f&t=5Fq5XJrOBqj2ADb6-0)

A API está documentada e pode ser testada diretamente via Swagger em: http://localhost:1881/api

# SoftPet

Bem-vindo ao SoftPet, um aplicativo para gerenciar informações de pets! Este projeto é composto por um backend (NestJS com TypeORM) e um frontend (Next.js). Este guia explica como configurar e rodar o projeto localmente após clonar o repositório.

## 📌 Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados no seu sistema:

1. **Node.js** (versão 18.x ou superior) 
2. **npm** (vem com o Node.js) - Verifique com `npm -v`
3. **PostgreSQL** (versão 14.x ou superior) 
4. **Git** 

---

## 🏗 Estrutura do Projeto

- `petshop-api`: Backend desenvolvido com NestJS e TypeORM.
- `front-petshop`: Frontend desenvolvido com Next.js.

---

## 🛠 Configuração do Banco de Dados

Antes de rodar o projeto, configure o PostgreSQL com as seguintes credenciais:

- **Usuário:** `postgres`
- **Senha:** `admin`
- **Banco de dados:** `petshop`
- **Porta:** `5432` (padrão)

Se necessário, crie o banco de dados manualmente via terminal:

```sql
CREATE DATABASE petshop;

Depois, configure um arquivo .env na pasta petshop-api:
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=admin
DATABASE_NAME=petshop


🚀 Passo a passo para rodar o projeto
1️⃣ Clonar o repositório
git clone https://github.com/JailsonFSantos/desafio-junior-1.git
cd desafio-junior-1

2️⃣ Configurar e rodar o backend
cd petshop-api
npm install
npm run start:dev

3️⃣ Configurar e rodar o frontend
Abra outro terminal e execute:
cd front-petshop
npm install
npm run dev

O backend estará disponível em: http://localhost:3000
O frontend estará disponível em: http://localhost:3001

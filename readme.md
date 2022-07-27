![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)

# Desafio - Desenvolvedor Fullstack - Júnior
Seja bem-vindo! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato ao cargo proposto.

## Instruções
- Faça um fork deste repositório;
- O conjunto mínimo de tecnologias a serem utilizadas são: alguma das tecnologias front-end e back-end informadas na proposta desse desafio;
- Crie um passo a passo de como rodar a sua aplicação;
- Após finalizar, submeta um pull request com um comentário informando o seu e-mail de contato e aguarde nossa avaliação.

## Proposta
Você deverá desenvolver um projeto utilizando React no front-end e Node.js no back-end com a finalidade de que seja possível listar, visualizar, criar, editar e excluir animais de estimação de uma petshop.

**Observações:**
> - Você pode utilizar qualquer banco de dados relacional disponível;
> - Cada animal de estimação precisa ter um identificador único, nome, idade, tipo (gato ou cachorro) e raça;
> - Além dos dados do animal, é necessário também salvar os dados pessoais, de contato e de endereço do seu respectivo dono.

## Diferenciais
Serão considerados diferenciais:

- Conhecimento sólido em Expo ou React Native;
- Boas práticas de escrita de código (código limpo, padrões de arquitetura, etc.);
- Conhecimento em Firebase;
- Conhecimento em infraestruturas em nuvem;
- Conhecimento em PHP.

## 🚩 Resolução do Desafio - PetSalem 🐈
- Foi desenvolvido apenas o back-end da aplicação

## 🚀 Tecnologias Utilizadas 
  <div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" height="40" width="52" alt="mysql logo"  />
  </div>
  </br>
 
## 💼 Dependências Utilizadas 
- Express 
- Sequelize
- Dotenv
- Mysql
- Nodemon

## ⚙️ Configuração de Ambiente e Execução do Projeto 
- Pré-Requisitos:
  - Nodejs
  - Gerenciador de depêndecia npm ou yarn 
  - Mysql
  
- Clonar o repositório em questão
```bash
git clone https://github.com/codecampos/desafio-junior-1.git
```
- Entrar no diretório da pasta backend
```bash
cd backend
```
- Instalar as dependências do projeto
```bash
npm install
```
- Criar o arquivo .env na raiz do projeto para adição das variavéis de ambiente utilizadas
```bash
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
```
- Inicializar o servidor que irá na porta 3000
```bash
npm run start
```

## 🧿 Exemplos de Testes Utilizando a API Client Insomnia
```bash
GET http://localhost:3000/petshop

[
	{
		"id": 1,
		"name": "matheus",
		"phoneNumber": "81973012817",
		"zipcode": "55155080",
		"street": "rua zivaldo",
		"houseNumber": 40,
		"createdAt": "2022-07-27T12:41:38.000Z",
		"updatedAt": "2022-07-27T12:41:38.000Z",
		"pets": [
			{
				"id": 2,
				"name": "lua",
				"age": 1,
				"typeOfAnimal": false,
				"breedOfAnimal": "labrador",
				"createdAt": "2022-07-27T13:05:33.000Z",
				"updatedAt": "2022-07-27T13:05:33.000Z",
				"petOwner_id": 1
			}
		]
	}
]


POST http://localhost:3000/petOwners

SEND:

{
	"name": "matheus",
	"phoneNumber": "81973012817",
	"zipcode": "55155080",
	"street": "rua zivaldo",
	"houseNumber": "40"
}

RETURN:

{
	"id": 1,
	"name": "matheus",
	"phoneNumber": "81973012817",
	"zipcode": "55155080",
	"street": "rua zivaldo",
	"houseNumber": "40",
	"updatedAt": "2022-07-27T12:41:38.142Z",
	"createdAt": "2022-07-27T12:41:38.142Z"
}


POST http://localhost:3000/petOwners/1/pets

SEND:

{
	"name": "lua",
	"age": 1,
	"typeOfAnimal": 0,
	"breedOfAnimal": "labrador"
}

RETURN:

{
	"id": 2,
	"name": "lua",
	"age": 1,
	"typeOfAnimal": false,
	"breedOfAnimal": "labrador",
	"petOwner_id": "1",
	"updatedAt": "2022-07-27T13:05:33.984Z",
	"createdAt": "2022-07-27T13:05:33.984Z"
}


PUT http://localhost:3000/petOwners/pets/1

SEND:

{
	"name": "lua",
	"age": 1,
	"typeOfAnimal": 0,
	"breedOfAnimal": "labradora"
}

RETURN:

{
	"id": 1,
	"name": "lua",
	"age": 1,
	"typeOfAnimal": false,
	"breedOfAnimal": "labradora",
	"createdAt": "2022-07-27T12:41:42.000Z",
	"updatedAt": "2022-07-27T13:04:12.000Z",
	"petOwner_id": 1
}

DELETE http://localhost:3000/petOwners/pets/1
```

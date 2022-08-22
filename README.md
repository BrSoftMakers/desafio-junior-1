## Pré-Requisitos para Rodar o Projeto

Ter instalados:

- Node
- MySQL

## Tecnologias Utilizadas

  <div align="left">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="mysql logo"  />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" height="40" width="52" alt="mysql logo"  />
    </div>
    
  </div>
  </br>
 
## Dependências Utilizadas 
>- Backend
- Express  
- Mysql
- Nodemon
- Cors

>- Frontend

- React Icons
- React Modal
- React Router Dom

## Configuração de Ambiente e Execução do Projeto

- Clonar este repositório

```bash
git clone https://github.com/brunogoncalvess/desafio-junior-1.git
```

>- ### Configuração do Banco de Dados

- Criar o esquema no MySQL

```sql
CREATE SCHEMA `petshop`;
```
- Criar a tabela

```sql
CREATE TABLE `pets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `age` int DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `race` varchar(45) DEFAULT NULL,
  `owner` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

- Adicinar alguns dados

```sql 
INSERT INTO `petshop`.`pets` (`id`, `name`, `age`, `type`, `race`, `owner`, `address`) VALUES ('1', 'Kiro', '12', 'Gato', '', 'Bruno', 'Rua X');
INSERT INTO `petshop`.`pets` (`name`, `age`, `type`, `race`, `owner`, `address`) VALUES ( 'Totó', '5', 'Cachorro', 'Poodle', 'Alice', 'Rua Y');
INSERT INTO `petshop`.`pets` (`name`, `age`, `type`, `race`, `owner`, `address`) VALUES ( 'Baleia', '15', 'Cachorro', 'Vira Lata', 'Fabiano', 'Rua 0');
INSERT INTO `petshop`.`pets` (`name`, `age`, `type`, `race`, `owner`, `address`) VALUES ( 'Napoleão', '20', 'Porco', '', '', 'Rua Z');
```
<div style="font-weight: bold">
- No arquivo server/models/db adicionar as informações do do MySQL
</div>

<br>

>- ### Instalação de Dependências e Inicialização

- Instalar as dependências e inicializar o backend

```bash
cd server
```
```bash
npm install
```
```bash
npm run dev
```

- Instalar as dependências e inicializar o frontend

```bash
cd ..
```
```bash
cd client
```
```bash
npm install
```
```bash
npm start
```
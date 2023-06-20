## Pré-Requisitos para Rodar o Projeto

Ter instalados:

- Node
- MySQL
- Git

## Tecnologias Utilizadas

  <div align="left">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="javascript logo" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="mysql logo"  />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" height="40" width="52" alt="mysql logo"  />
    </div>
    </br>

## Dependências utilizadas

</br>

> - Backend

- Express
- Mysql
- Nodemon
- Cors

> - Frontend

- React axios
- React icons
- React toastify

</br>

## Configuração do ambiente e execução do projeto

</br>
- Clonar este repositório

```bash
git clone https://github.com/silvavictorleandro/desafio-junior-1
```

</br>

> - Configuração do Banco de Dados com MySQL

```sql
CREATE SCHEMA `crud`
```

</br>

- Criar tabela

```sql
CREATE TABLE `pets` (
  `id` int NOT NULL AUTO_INCREMENT,
	`nomePet` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `raca` varchar(255) NOT NULL,
  `idade` varchar(255) NOT NULL,
  `cpfTutor` varchar(11) NOT NULL,
)

CREATE TABLE `tutores` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nomeTutor` varchar(255) NOT NULL,
  	`contato` varchar(255) NOT NULL,
  	`endereco` varchar(255) NOT NULL,
  	`cpf` varchar(11) NOT NULL,
)

SQL file
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password123';
```

</br>

## Instalação de Dependências e Inicialização

</br>

- Instalar as dependências e inicializar o backend

```
cd api/
```

```
npm install
```

```
npm start
```

- Instalar as dependências e inicializar o frontend

```
cd ..
```

```
cd frontend
```

```
npm install
```

```
npm run dev
```

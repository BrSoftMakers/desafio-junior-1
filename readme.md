<h1 align="center">PetMania - Desafio Softmakers</h1>

# Como executar o projeto

Para clonar e executar esta aplicação, você precisará ter o [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) e [Docker/Docker-compose](https://www.docker.com) instalados.

## Back-end

Abra a pasta "backend" para prosseguir.

```bash
$ cd backend
```

Em seguida, você precisa editar o arquivo docker-compose.yaml e adicionar o nome do seu banco, usuário e senha.

```bash
environment:
    POSTGRES_DB: <nome_do_banco>
    POSTGRES_USER: <nome_do_usuario>
    POSTGRES_PASSWORD: <senha_do_banco>
```

Agora, crie um arquivo .env na raiz do projeto back-end contendo as seguintes variáveis:

```bash
DATABASE_DB= <nome_do_banco>
DATABASE_HOST= <url_ou_IP_do_banco>
DATABASE_PORT= <porta_utilizada>
DATABASE_USER= <usuario_utilizado_anteriormente>
DATABASE_PASSWORD= <senha_utilizada_anteriormente>
```

Após concluir as etapas anteriores, com o Docker instalado e em execução na sua máquina, siga o exemplo abaixo:

```bash
# Instalar dependências
$ npm install

# Iniciar banco de dados
$ docker-compose up -d

# Executar a aplicação
$ npm run start:dev
```

## Front-end

Abra a pasta "frontend" para prosseguir.

```bash
$ cd frontend
```

Agora, crie um arquivo .env na raiz do projeto front-end contendo a seguinte variável:

```bash
VITE_BASE_URL=<URL_DA_API>
```

Se você seguiu o passo a passo para executar o back-end, a URL da API provavelmente será: http://localhost:3333/api/v1

Após concluir as etapas anteriores, execute os comandos a seguir:

```bash
# Instalar dependências
$ npm install

# Executar a aplicação
$ npm run start:dev
```

Sua aplicação front-end provavelmente estará rodando na seguinte URL: http://localhost:5173. Caso contrário, a URL será exibida no terminal.

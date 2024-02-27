
# Soft-Pet

Solução para o [desafio jr 1](https://github.com/BrSoftMakers/desafio-junior-1) da SoftMakers

A aplicação consiste em um CRUD simples para um PetShop, podendo Editar, Cadastrar, Listas e Excluir um Pet. Além de listar por pesquisa de nome.
## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

#### 📋 Pré-requisitos

Antes de iniciarmos verdadeiramento o projeto, é necessario que você tenha algumas coisas intaldas em sua maquina:

- 🐋 Docker: [Windows](https://docs.docker.com/desktop/install/windows-install/) | [Linux](https://docs.docker.com/desktop/install/linux-install/) | [MacOs](https://docs.docker.com/desktop/install/mac-install/)

- 🍀 NodeJs(18.18 ou superior): [Instalação](https://nodejs.org/en/download/)

- ♦️ Git: [Windows](https://git-scm.com/download/win) | [Linux](https://git-scm.com/download/linux) | [MacOs](https://git-scm.com/download/mac)

#### 🔧 Instalação

Para usar o projeto em sua maquina basta apenas seguir o passo-a-passo a baixo:

#1 Clonagem do repositorio

- Abra o Git Bash na pasta onde deseja clonar o repositorio
- Digite o seguinte comando e execute:

```
git clone https://github.com/GeyzonErik/desafio-junior-1.git
```

#### 🏠 Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env da pasta raiz:

`DB_USER=[db_user]`

`DB_PASSWORD=[db_password]`

`DB_NAME=[db_name]`

`DATABASE_URL="postgresql://[db_user]:[db_password]@localhost:5432/[db_name]"`

> Lembre de substituir os valores para os desejados
## 💾 Executando o projeto

Agora que o projeto está devidamente instalado em sua maquina basta seguir as seguintes instruções:

#0 Passo exclusivo pra Windows e Mac:

- Certifique de que o Docker Desktop está instalado e aberto em sua maquina

#1 Executando projeto

Abra a pasta raiz do projeto em um terminal de sua preferencia

> Recomendo o [Powershell](https://github.com/PowerShell/PowerShell/releases/) no Windows

Com a pasta aberta no terminal, execute o seguinte comando:

```
docker compose up --build
```

O projeto deve criar um container no Docker, e logo estará disponivel para visualização em:

- Frontend: localhost:8080
- Backend: localhost:3030/docs/api


## 🛠️ Construído com

Principais ferramentas utilizadas no projeto:

- [TypeScript](https://www.typescriptlang.org/): Principal linguage da aplicação
- [npm](https://www.npmjs.com/): Gerenciador de dependência
- [NextJs](https://nextjs.org/): Construção do FrontEnd
- [Styled-Components](https://styled-components.com/): Estilização do FrontEnd
- [Docker](https://www.docker.com/): Conteinerização de toda aplicação
- [NestJs](https://docs.nestjs.com/): Construção da API
- [Swagger](https://swagger.io/): Documentação da API
- [PrimsaORM](https://www.prisma.io/): Mediador entre API e o Banco de Dados

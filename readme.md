# SoftPet


SoftPet é um projeto Full Stack dado a mim como desafio técnico O desafio consiste em desenvolver um projeto utilizando Next.js no front-end e Nest.js no back-end, para criar uma aplicação que permita listar, visualizar, criar, editar e excluir animais de estimação em uma petshop, com base no Protótipo Figma: [https://www.figma.com/file/z0zYWFHb7OK6TUXDBBw5my/SoftMakers-Challenges%3A-Dev-Jr.?type=design&node-id=0%3A1&mode=design&t=vAPkbzL97wUL9qma-1](https://www.figma.com/file/z0zYWFHb7OK6TUXDBBw5my/SoftMakers-Challenges%3A-Dev-Jr.?type=design&node-id=0%3A1&mode=design&t=vAPkbzL97wUL9qma-1)

**Observações:**

> -   Você pode utilizar qualquer banco de dados relacional disponível;
> -   Cada animal de estimação precisa ter um identificador único, nome, idade, tipo (gato ou cachorro) e raça;
> -   Além dos dados do animal, é necessário também salvar os dados pessoais, de contato e de endereço do seu respectivo dono.

## Funcionalidades

 1. No Back-End foi produzido um CRUD, para podermos salvar os dados em um banco de dados "Postgres".
 2. O Front foi desenvolvido de forma responsiva seguindo o princípio "mobile first".
 3. Na aplicação é possível editar, excluir, criar e deletar, além de filtrar a lista de clientes por nome do pet.
 4. a aplicação possui paginação, também foram adicionados alerts para passar o status de execução ao usuário.
## Tecnologias Utilizadas
### Principais Dependências do Front-End:

-   **next:** Framework de React para aplicativos web.
-   **react:** Biblioteca principal para construir interfaces de usuário.
-   **react-dom:** Pacote para renderização de elementos React no navegador.
-   **sonner:** Pacote utilizado para implementação de alerts na aplicação.

### Principais Dependências do Back-End:

-   **@nestjs/common:** Módulo principal do Nest.js para aplicativos HTTP.
-   **@nestjs/core:** Módulo principal do Nest.js para o núcleo da estrutura.
-   **@nestjs/mapped-types:** Biblioteca para mapeamento de tipos em tempo de compilação.
-   **@nestjs/platform-express:** Módulo para integrar o Nest.js com o Express.js.
-   **@prisma/client:** Cliente Prisma para acesso ao banco de dados.
-   **reflect-metadata:** Biblioteca para metadados de reflexão para TypeScript.
-   **rxjs:** Biblioteca para programação reativa em JavaScript.

## Requisitos
A aplicação roda no Docker, então não se faz necessário ter nada, além disso, em sua máquina, caso queira rodar localmente, certifique-se de ter:

 1. Node: versão 20 ou superior instalando.
 2. postgres: servidor remoto, ou local como preferir, não se esqueça das variáveis de ambiente.
 3. configure corretamente o seu .env existe um .envExemplo no projeto caso queira consultar.

## Instalação

### para executar o projeto em sua máquina execute os seguintes comandos:

 1. Utilizado Docker: `docker compose up -d` isso fara o Docker baixar as imagens necessárias "caso não possua na máquina" e subir os contêiner já baindados em seguida. O início pode demorar visto que são três contêineres com ordens de dependências definidas para evitar erros.
 2. rodando localmente: será necessário que você tenha os requisitos citados acima, inicie seu servidor com as variáveis de ambiente definidas e lembre-se de colocá-las também na conexão do prisma dentro da conexão em `back-end/.env`.
 
### Importante

rodando na primeira vez em sua máquina será necessário rodar a migrante e em seguida a seed, entenda como:
 uma vez com os contêineres no ar abra o terminal e digite o comando `docker ps` para lista todos os contêiner ligados, pegue o id do contêiner back-end e execute o comando a baixo 
 
    docker exec -it <id ou nome do contêiner> <commado>
O comando necessário é `/bin/sh`  caso não funcione tente `/bin/bash`
após isso estaremos dentro do contêiner de back-end:
execute os comandos `npx prisma migrate dev` de um nome a migrate e logo depois digite `npx prisma db seed` pronto agora a aplicação está funcionando corretamente.

# Olá, seja bem vindo ao Softpet🐶

## Sobre o projeto📔
<p>O projeto se trata de um sistema para cadastro de pets onde são capiturados caracteristicas e dados inerentes a um campeonato de animais de estimação.</p>

## Como instalar

- Primeiro faça um git clone do repositório
- Em seguida será necessário instalar as dependencias utilizadas tanto no backend quanto no frontend.
    - Entre nos repositórios onde estão os arquivos softpet. exmplo: `cd frontend/softpet` e `cd backend/softpet`
    - Para isso poderá repetir o mesmo comando de inslatação no dois repositórios `npm install`

- Após a instalação das dependências você deve alterar o arquivo de configuranção do banco de dados que você encontra no arquivo `backend/softpet/src/App.module.ts`
    - Neste aquivo você encontrará um configuração com o seguinte padrão:
    `@Module({
        imports: [PetsModule, TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'pets',
            entities: [Pet],
            synchronize: true
    })],
    controllers: [],
    providers: []
    })`.
    
    - Verifique se seu banco de dados SQL atual e o mesmo que o utilizado no projeto(Mysql), se for outro basta alterar o `type: mysql` para o banco de dados que tem disponível em sua máquina.
    - Se atente ao username e password do seu banco de dados para realizar alteração. Atualmente o projeto utiliza `username: 'root'` e `password: 'root'`. Caso se esqueça de alterar esses dados será impossível o projeto acessar o seu banco de dados.


## Como rodar o projeto🪐

- Primeiro identifique os repositórios do frontend e do backend.
    - exemplos: `backend/softpet` e `frontend/softpet`
- Agora com o seu terminal apontando para estes repositórios replique os seguintes comandos.
    - frontend: `npm run start:dev`
    - backend: `npm run dev`

- Agora o projeto está rodando e disponível para ser utilizado.

## Tecnologias Utilizadas🧑‍💻
- Frontend:
    - Next - Typescript
    - styled-modal-components
    - SASS
    - CSS
    - Axios

- Backend:
    - NestJS - Typescript
    - Mysql



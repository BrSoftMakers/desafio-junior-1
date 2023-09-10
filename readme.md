Guia de Configuração e Inicialização da Aplicação
Este guia fornecerá instruções passo a passo sobre como configurar e iniciar sua aplicação completa, incluindo o backend com Node.js e MySQL e o frontend com React. Certifique-se de atender aos requisitos prévios antes de prosseguir.

Requisitos Prévios
Antes de começar, certifique-se de que você tenha os seguintes requisitos instalados no seu sistema:

Docker: Você pode instalá-lo a partir do site oficial.

Docker Compose: Normalmente, o Docker Compose já está incluído quando você instala o Docker. Verifique se ele está instalado usando o comando docker-compose --version.

Node.js: Você precisará do Node.js para executar o frontend. Você pode instalá-lo a partir do site oficial.

Passo 1: Clone o Repositório
Abra um terminal e execute o seguinte comando para clonar o repositório da sua aplicação:

git clone <URL_DO_SEU_REPOSITORIO>

Passo 2: Navegue até a Pasta do Projeto
Navegue para a pasta do seu projeto usando o comando cd:

Passo 3: Configure o Backend (Node.js e MySQL) com Docker Compose
Dentro da pasta do projeto, você encontrará um arquivo chamado docker-compose.yml. Este arquivo configura os serviços Docker necessários para o backend e o banco de dados MySQL. Certifique-se de que o arquivo esteja configurado corretamente, conforme descrito anteriormente na documentação.

Passo 4: Inicie o Ambiente de Desenvolvimento
Abra um terminal na pasta do projeto e execute o seguinte comando para iniciar o ambiente de desenvolvimento com Docker Compose:

docker-compose up
Isso iniciará o servidor Node.js e o banco de dados MySQL em contêineres Docker, mas não esqueça de iniciar o docker com sudo service docker start antes do docker-compose up.

Passo 5: Configure o Frontend (React)
Dentro da pasta do projeto, você encontrará uma pasta chamada frontend, que é o aplicativo React. Certifique-se de que você já executou npm install dentro dessa pasta para instalar as dependências do frontend.

Passo 6: Inicie o Aplicativo React
Navegue até a pasta frontend no terminal:

cd frontend
Agora, inicie o aplicativo React com o seguinte comando:

npm start
Isso iniciará o aplicativo React em seu navegador padrão.

Passo 7: Acesse a Aplicação
Abra seu navegador e acesse http://localhost:3000 para usar o frontend do aplicativo.

Login
O primeiro usuário gerado automaticamente é:

Usuário: admin
Senha: adminpassword
Você pode usar essas credenciais para fazer login e começar a usar sua aplicação.

Isso conclui o processo de configuração e iniciação da sua aplicação completa. Lembre-se de que esta é uma configuração básica, e você pode expandir e personalizar sua aplicação conforme necessário. Certifique-se de proteger suas credenciais de banco de dados e outras informações confidenciais em um ambiente de produção.

![SoftMakers](https://www.softmakers.com.br/assets/img/logotipo14xxhdpi.png)



# Desafio - Desenvolvedor Fullstack Júnior

Este desafio foi projetado para avaliar a minha capacidade técnica como candidato à vaga de Desenvolvedor Fullstack Júnior.



## Instruções



- Objetivo do projeto

- Apresentação do projeto

- Como baixar o projeto

- Configurando o projeto

- Testando o projeto

- Tecnologias usadas

- Agradecimento

- Redes / Contato




## Objetivo do projeto

<p  align='justify'> O projeto tem como objetivo criar um sitema básico, para um Petshop, que auxilie nas tarefas do dia a dia, com as funções de cadastro, edição, listagem, pesquisa, remoção de registros (CRUD).</p>



### Apresentação do projeto



![LovePet](https://lh3.googleusercontent.com/METDzwFlUqvQqFoz_aMWXl5RtoiZvrTxebmSIlc-cdsPghkQfAAwtPtZheQEohN-mAXTmUBn8ZBtv1y2U-aaZwVOOc5YxVIrZTdU5Zf_g5PBUedeky4xKfovwDENlTVdGoXsSFP3eKyCOCE4BOm9HrOtXw_q54rzw9e2m0weqgAciwgfCi71E4WcM2SxnUeaMcyCE3xRgdA8x_8LT3OLfV4nm6yKF5oUOuBwN-WVZ-gbyfgtVt6H-baQJP4gZGFFTmCxr98ECVK7-StgcH2APKkCPU7Agn5i8nDD31_HS3fl9ffEIpx1PLHt5Nka-OtI5np6RGtdOp3Z7iqKiNGNwOMkK9RkMqZ9d-VpUpJFMjFDX1ivxjjTmCQCPq2lMyjmTyKdFYptejsBI9ZKVTmTGJqhYgV7vORblhT09_qkVw9QeNRv2uUMLrt2iFj5-Biiic1_yaMthnEaAIh6jzopuE4cdPvWLIWaXaeLGF65wGMBD3vnk_yju_auyRLAxpMgRkax3wvjpaNEUW-Ff1Xz1SX8dDmhcmqFfwVOHr87axdnBhfVemy-sJK6evK7rABHNcnqKiFX3LsbvWul-AsxZsWmt8gojVmq5ZHIGZWBjXKplvVUorgd2lA1XTfX5FhnZmwiQ3OD5K1LdDkAUrtpqSeYb0uzOe4Z3_oUvsqXgq1XkmxhoonKsdemUduUK406AaojU2gSydRtE9q9UsV33pKf=s500-no?authuser=0')



<p  align='justify'> O projeto está composto de layout responsivo, design básico, sistema de validação, cadastro, edição, listagem de todos os registros na página principal, com função de paginação, botão de editar com requisição ao banco, trazendo todos os dados dos campos cadastrados, botão de deletar, com validação para maior segurança antes de deletar, necessária a confirmação para executar a exclusão do registro. Implementado no layout básico e acessivel de todas as rotas, a opção de busca por nome, trazendo todos os registros que contenham o texto buscado através de pesquisa. </p>



### Como baixar o projeto

<pre>

<b> REQUISITOS MÍNIMOS </b>



<li>PHP 7.4+</li>

<li>Composer</li>

<li>Laravel Framework 8.x</li>

</pre>



#### 1. Instalando o PHP



+ <b>Instalação via terminal Linux </b>

<pre>$ sudo apt install php </pre>



+ <b> Instalação manual Linux, MacOS e Windows: </b>

<pre> https://www.php.net/manual/pt_BR/install.php </pre>



#### 2. Instalando composer

Pode verificar o método de instalação acessando: [Composer](https://getcomposer.org/download/) a forma de instalação via terminal ou manual estará disponível.



#### 3. Instalando Laravel via composer



Se o seu computador já tem PHP e Composer instalados, você pode criar um novo projeto Laravel usando o Composer diretamente.



<pre>$ composer create-project laravel/laravel example-app



$ cd example-app



$ php artisan serve </pre>



Mais informações poderá buscar através da documentação oficial do [Laravel](https://laravel.com/docs/8.x/installation).




#### 4. Baixando repositório



<pre>$ git clone https://github.com/RuanSalles/desafio-desenvolvedor-junior.git </pre>



#### 4.1 Acessando repositório



<pre>$ cd desafio-desenvolvedor-junior</pre>



<p  align='center'>ou</p> <br>

Navegue até seu workspace onde baixou o repositório.




#### 5. Configurando o projeto



<p  align='justify'>Abra a pasta do projeto através da sua IDE de preferência, navegue através das pastas e procure o documento .env e substitua as seguintes linhas.</p>



<pre>

DB_CONNECTION=mysql //(escolha seu banco de dados)



DB_HOST=localhost //(escolha seu localhost ou permaneca com 127.0.0.1)



DB_PORT=3306 //(porta padrão)



DB_DATABASE=petshop //(escolha o nome do banco de dados)



DB_USERNAME=root //(digite seu usuário mysql ou de acesso ao seu banco de escolha)



DB_PASSWORD= //(digite sua senha do mysql ou banco de escolha)



</pre>



<p  align='justify'>Caso queira, basta abrir seu Workbench e importar o banco de dados disponibilizado no repositório. Contido na pasta <b> public/db/pet.sql </b> </p>



<p  align='justify'> Após configurar o arquivo <b> .env </b> se decidiu não importar o banco existe, você pode acessar seu Workbench e criar um banco de dados com o nome <b>petshop</b> e rodar o comando no seu terminal:</p>



<pre> $ php artisan migrate</pre>



Será criada toda a tabela com suas especificações e comentários descrevendo dos dados.



Por fim, você poderá iniciar a aplicação ao digitar o comando no seu terminal:

<pre> $ php artisan serve </pre>



#### 6. Testando o projeto



<p  align='justify'>A partir daqui você tem livre escolha para realizar os testes, de cadastro, exclusão, listagem e edição de todos os registros, além da responsividade da página. <p>



<pre>

<b>Validações implementadas</b>

<ul>

<li>Todos os campos são obrigatórios</li>

<li> Número máximo e mínimo de caracteres para campos String</li>

<li> Idade só poderá conter 2 dígitos</li>

<li> Telefone não aceita digitação de string</li>

<li> Telefone não salva se receber valor string</li>

</ul>

Obs: Todos os campos citados, tem mensagem de erro apresentada na tela e personalizada.

</pre>



#### 7. Tecnologias usadas



##### Front-End

+ <b> HTML5</b>

+ <b> CSS3</b>

+ <b> JavaScript</b>

+ <b> Framework - Bootstrap 5</b>



##### Back-End



+ <b> PHP</b>

+ <b> Framework - Laravel 8.x</b>



##### Bando de Dados



+ <b> MySQL</b>



### Agradecimento



<p  align='justify'> Fico grato pela oportunidade de poder demonstrar meus conhecimentos e aprimora-los através do desafio proposto pela empresa <b>SoftMakers. </b> Fico orgulhoso de ser um dos candidatos selecionados a participar do processo seletivo e aberto a feedbacks sobre a aplicação desenvolvida. </p>




### Redes / Contato




<a  href="https://twitter.com/salescode_"  target="blank"><img  align="center"  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"  alt="ruansalles"  height="30"  width="30" /></a>

<a  href="https://www.linkedin.com/in/ruan-sales-7b4051171/"  target="blank"><img  align="center"  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"  alt="ruansalles"  height="30"  width="30" /></a>

<a  href="https://www.instagram.com/osalescodes/"  target="blank"><img  align="center"  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"  alt="ruansalles"  height="30"  width="30" /></a>

<a  href="https://www.instagram.com/osalescodes/"  target="blank"><img  align="center"  src="https://img.icons8.com/ios-filled/50/000000/twitch.png"  alt="ruansalles"  height="30"  width="30" /></a>
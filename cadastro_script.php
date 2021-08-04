<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<section class="container">
    <div class="box">
        <div class="box-header with-border">
             <div class="box-title">
                <h2 class="text-center">Cadastrar Pet</h2>
                </div><hr>
                <div class="box-body">
                    <?php
                    include "conexao.php";

                    $nome = $_POST['nome_pet'];
                    $especie = $_POST['especie_pet'];
                    $raca = $_POST['raca_pet'];
                    $idade = $_POST['idade_pet'];
                    $rastreio = $_POST['num_rastreio'];
                    $contato = $_POST['num_contato'];
                    $ntutor = $_POST['nome_tutor'];

                    $sql ="INSERT INTO `pet_1`( `nome_pet`,
                     `especie_pet`, `raca_pet`, `idade_pet`, `num_rastreio`, 
                     `num_contato`, `nome_tutor`) VALUES ( '$nome', '$especie','$raca','$idade',
                     '$rastreio','$contato', '$ntutor')";

                        if (mysqli_query($conn,$sql)
                        ) {echo "<h3>Cadastro Efetuado com Successo</h3>";
                           }else echo " nao cadastrado";
                           
                    ?>
                     <a type="button" class="btn btn-primary" href="adicionar_pet.php">voltar</a>
                </div>

            </div>
        </div>

    </div>





</section>
<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>cadastro!</title>
  </head>
  <body>
      <?php
      $pesquisa =$_POST['busca'] ?? '  ';
            include_once("conexao.php");

         $resultpet_1="SELECT * FROM pet_1 WHERE nome_pet LIKE '%$pesquisa%'";
        $resultadopet_1= mysqli_query($conn,$resultpet_1);
        ?>
      

      <div class="container-fluid">
          <div class="row">
              <div class="col">
             <h1>Consulta por Nome</h1>
            
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <form class="d-flex" action="consultas.php" method="POST">
                            <input class="form-control me-2" type="search
                                " placeholder="Digite o Nome do Pet" name="busca" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Consultar</button>
                        </form>
                        
                    </div>
                </nav><br>  
                
                <table class="table table-hover"> 
                    <thead>
                        <tr>
                            <th scope="col">Nome do Pet</th>
                            <th scope="col">Epecie do Pet</th>
                            <th scope="col">Raça do Pet</th>
                            <th scope="col">Idade do Pet</th>
                            <th scope="col">Número de Rastreio</th>
                            <th scope="col">Número para Contato</th>
                            <th scope="col">Nome do Tutor</th>
                        </tr>
                    </thead>
                    <tbody>
                     <?php
                        while($row_usuario = mysqli_fetch_assoc( $resultadopet_1)){
                            $cod_pet = $row_usuario['cod_pet'];
                            $nome_pet = $row_usuario['nome_pet'];
                            $especie_pet = $row_usuario['especie_pet'];
                            $raca_pet = $row_usuario['raca_pet'];
                            $idade_pet = $row_usuario['idade_pet'];
                            $num_rastreio = $row_usuario['num_rastreio'];
                            $num_contato = $row_usuario['num_contato'];
                            $nome_tutor = $row_usuario['nome_tutor'];}
                         
                       
                       
                        echo"<tr>
                            <th> $nome_pet</td>
                            <td>$especie_pet </td>
                            <td> $raca_pet</td>
                            <td> $idade_pet</td>
                            <td> $num_rastreio</td>
                            <td>  $num_contato</td>
                            <td> $nome_tutor</td>
                            <td> <a href='adicionar_pet_edit.php?id=$cod_pet' class='btn btn-success'>editar</a></td>
                            <td> <a href='excluir.php?id=$cod_pet' class='btn btn-danger'>Apagar</a></td>
                            </a></td>
                        </tr>"
                        ?>
                       
                    </tbody>
                </table>
  
                <a href="index1.php" class="btn btn-primary">Página Inicial</a>
            
              </div>
          </div>
      
      <br>
   


 

                            
                            
            
       
   

  

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>
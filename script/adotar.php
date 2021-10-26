<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="../style/style.css" />

    <!-- BOOTSTRAP -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>

    <title>Petshop</title>
  </head>
  <body>
    <?php 
      $pesquisa = $_POST['busca'] ?? '';

    include "conexao.php";

    $sql = "SELECT * FROM animals WHERE nome LIKE '%$pesquisa%'";

    $dados = mysqli_query($conn, $sql);
  
    ?>
    
    <div style="margin-top: 80px;" class="container">
      <header>
    <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-light" style="color: #fff;" >
          <div class="container-fluid">
            <img src="../assets/logo.png" alt="Petshop logo" width="201" height="38"/>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav nav-justified me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="../index.php">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../pages/Relatos.php">Relatos</a>
                </li>
                <li class="nav-item dropdown active">
                  <a 
                    class="nav-link dropdown-toggle "
                    href="#"
                    id="navbarDropdown "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style="text-decoration: underline wavy #0066FF;"
                  >
                    Adote
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="adotar.php">Aves</a></li>
                    <li><a class="dropdown-item" href="adotar.php">Cães</a></li>
                    <li><a class="dropdown-item" href="adotar.php">Gatos</a></li>
                    <li><a class="dropdown-item" href="adotar.php">Peixes</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="adotar.php">Outros</a></li>
                  </ul>
                  <li class="nav-item">
                    <a class="nav-link" href="../pages/Contato.php">Contato</a>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      
            <div class='row'>
              <div class="container-fluid">
              <h3 class="navbar-brand">Adote um Companheiro!</h3>
              <form class="d-flex" action="adotar.php" method="POST" >
                <a class="btn btn-outline-info" href="cadastro.php" style="margin: 0 2px; text-transform: uppercase; font-weight: bold;" role="button">Cadastrar</a>
                <input style="width: 150px" class="form-control me-2" type="search" placeholder="Procurar Companheiro" aria-label="Search" name="busca">
                <button style="text-transform: uppercase; font-weight: bold;" class="btn btn-outline-primary my-2 my-sm-0" type="submit" >Procurar</button>
        </form>
        </div>
        <?php

        while( $linha = mysqli_fetch_assoc($dados)){
        $cod_animal = $linha['cod_animal'];    
        $foto = $linha['foto'];
        $idade = $linha['idade'];
        $nome = $linha['nome'];    
        $r_e = $linha['r_e'];    
        $genero = $linha['genero'];    
        $telefone = $linha['telefone']; 
        if(!$foto == null){
          $mostra_foto = "<img style='margin: 0 12px; width: 150px; height: 150px;' src='../img/$foto'>";
        }  else {
          $mostra_foto = '';
        }
        echo " 
        <div id='selected' class='card' style='width: 15rem; margin: 12px auto;'>
        <div class='card-body'>
        <h6 class='card-title'style='text-align: center; font-weight: bold; text-transform: uppercase;' >$nome</h6>
        <div>$mostra_foto</div>
        <hr>
        <p class='card-text'><strong>Idade: </strong>$idade</p>
        <hr>
        <p class='card-text'><strong>Raça / Especie: </strong>$r_e</p>
        <hr>
        <p class='card-text'><strong>Gênero: </strong>$genero</p>
        <hr>
        <p class='card-text'><strong>Telefone: </strong>$telefone</p>
        <div class='d-grid gap-2'>
        </div>
        <a href='edit.php?id=$cod_animal' 
        style='margin: 10px 2px; width: 45%; text-transform: uppercase; font-weight: bold;' 
        class='btn btn-outline-primary btn-sm'
        >Editar</a>
        <a href='#' 
        style='margin: 10px 2px; width: 45%; text-transform: uppercase; font-weight: bold;' class='btn btn-danger btn-sm' data-bs-toggle='modal' data-bs-target='#confirma'
        onclick=" .'"' ."pegar_dados($cod_animal, '$nome')" .'"' .">Excluir</a>
        </div>
        </div>
        ";
            }
            ?>
            
      </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="confirma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmar Exclusão?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="excluir_script.php" method="POST">
        <p><strong>Deseja Excluir: </strong><span id="nome_animal"></span>?</p>
      </div>
      <div class="modal-footer">
        <button style="text-transform: uppercase; font-weight: bold;" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
        <input type="hidden" name="nome" id="nome_animal_1" value="">
        <input type="hidden" name="id" id="cod_animal" value="">
        <input style="text-transform: uppercase; font-weight: bold;" type="submit" class="btn btn-danger" value="Sim" />
        </form>
    </div>
    </div>
  </div>
</div>

  <script type="text/javascript">
    function pegar_dados(id, nome){
      document.getElementById('nome_animal').innerHTML = nome;
      document.getElementById('nome_animal_1').value = nome;
      document.getElementById('cod_animal').value = id;
    }
  </script>

</body>
</html>

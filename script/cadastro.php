<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="../style/style.css">

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

    <title>Cadastro</title>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card" id="carde" style="width: 25rem;">
            <div class="card-body">
            <h3 style="text-transform: uppercase;">Cadastro</h3>
          <form action="cadastro_script.php" method="POST" enctype="multipart/form-data">
            <div class="form-group">
              <label for="nome">Nome do Animalzinho</label>
              <input type="text" class="form-control" name="nome" required />
            </div>

            <div class="form-group">
              <label for="foto">Foto</label>
              <input type="file" class="form-control" name="foto"  accept="image/*" required/>
            </div>

            <div class="form-group">
              <label for="nome">Idade</label>
              <input type="text" class="form-control" name="idade" required />
            </div>

            <div class="form-group">
              <label for="nome">Raça/Especie</label>
              <input type="text" class="form-control" name="r_e" required />
            </div>

            <div class="form-group">
              <label for="nome">Gênero</label>
              <input
                type="option"
                class="form-control"
                name="genero"
                required
              />
            </div>

            <div class="form-group">
              <label for="nome">Contato</label>
              <input
                type="phone"
                class="form-control"
                name="telefone"
                required
              />
            </div>

            <div class="form-group">
            <button style="margin: 8px auto; text-transform: uppercase; font-weight: bold;" type="submit" class="btn btn-success btn-block">Cadastrar</button>
            </div>
          </form>
          
          </form>

          <a style="margin: 8px auto; text-transform: uppercase; font-weight: bold;" href="../index.php" class="btn btn-primary btn-block">Volte para o Inicio</a>
        </div>
            </div>
          </div>
         
      </div>
    </div>
  </body>
</html>

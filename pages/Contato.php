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
    <div class="container">
      <header>
        <!-- HEADER -->
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
                      <a class="nav-link " aria-current="page" href="../index.php">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Relatos.php">Relatos</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Adote
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="../script/adotar.php">Aves</a></li>
                    <li><a class="dropdown-item" href="../script/adotar.php">Cães</a></li>
                    <li><a class="dropdown-item" href="../script/adotar.php">Gatos</a></li>
                    <li><a class="dropdown-item" href="../script/adotar.php">Peixes</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="../script/adotar.php">Outros</a></li>
                  </ul>
                  <li class="nav-item">
                    <a id="active" class="nav-link active" href="contato.php">Contato</a>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </header><!-- / HEADER -->
      <section id="section--contact"><!--SECTION CONTENT -->
        <div class="card text-dark bg-light mb-3" style="max-width: 20rem;">
          <div class="card-header"><h3 style="text-align: center;">Contato</h3></div>
          <div class="card-body" style="text-align: center;">
            <p><strong>Email: </strong>alexsandromart2002@protonmail.com</p>
            <hr>
            <p><strong>Github </strong><br><a>https://github.com/Alexsandro-ms</a></p>
            <hr>
            <p><strong>Instagram<br></strong>@alexsandrom.s</p>
            <hr>
            <p><strong>WhatsApp:<br></strong>(81)9 9301-0552</p>
          </div>
    </section><!-- / SECTION!-->
    </div>
  </body>
</html>

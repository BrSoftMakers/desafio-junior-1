<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="style/style.css" />

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
            <img src="assets/logo.png" alt="Petshop logo" width="201" height="38"/>
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
                      <a id="active" class="nav-link active" aria-current="page" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/Relatos.php">Relatos</a>
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
                    <li><a class="dropdown-item" href="script/adotar.php">Aves</a></li>
                    <li><a class="dropdown-item" href="script/adotar.php">Cães</a></li>
                    <li><a class="dropdown-item" href="script/adotar.php">Gatos</a></li>
                    <li><a class="dropdown-item" href="script/adotar.php">Peixes</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="script/adotar.php">Outros</a></li>
                  </ul>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/Contato.php">Contato</a>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </header><!-- / HEADER -->
      <section id="section--content"><!--SECTION CONTENT -->
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="assets/wllppr.jpg" class="d-block w-100" alt="calopsita">
                <div class="carousel-caption d-none d-md-block">
                    <h4>Adote seu Amigo</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
              <div class="carousel-item">
                <img src="assets/wllppr2.jpg" class="d-block w-100" alt="cão e sua dona">
                <div class="carousel-caption d-none d-md-block">
                    <h4>Mais de 500 Animais Cadastrados</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
              <div class="carousel-item">
                <img src="assets/wllppr3.jpg" class="d-block w-100" alt="gato e sua dona">
                <div class="carousel-caption d-none d-md-block">
                    <h4>Centenas de Vidas Mudadas</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div id="button--slider" class=" d-md-flexgap-2 col-6 mx-auto d-md-flex justify-content-md-center">
          <a class="btn btn-primary" href="script/adotar.php" style="margin: 0 5px; color: white; text-transform: uppercase; font-weight: bold;" role="button">Adotar</a>
              <a class="btn btn-outline-info" href="script/cadastro.php" style="margin: 0 5px; text-transform: uppercase; font-weight: bold;" role="button">Cadastrar</a>
          </div>

    </section><!-- / SECTION!-->
    </div>
  </body>
</html>











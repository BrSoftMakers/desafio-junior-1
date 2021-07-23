<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= base_url('assets/js/app.js') ?>">
    <link rel="stylesheet" href="<?= base_url('assets/css/comum.css') ?>">
    <link rel="stylesheet" href="<?= base_url('assets/css/template.css') ?>">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="<?= base_url('assets/css/icofont.min.css') ?>">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- Essa Section renderizará os estilos  espesifico-->
    <?php echo $this->renderSection('estilos') ?>

</head>


<body>
    <header class="header">
        <div class="menu-toggle mx-3">
            <i class="icofont-navigation-menu"></i>
        </div>
        <div class="space"></div>
    </header>

    <aside class="sidebar">
        <nav class="menu mt-3">
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="day_records">
                        <i class="icofont-users mr-2"></i>
                        Animais
                    </a>
                </li>
            </ul>
        </nav>
    </aside>

    <main class="content">
        <?php echo $this->renderSection('conteudo') ?>
    </main>
    <script src="<?= base_url('assets/js/app.js') ?>"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>

    <script type="text/javascript">
        <?php if ($mensagem = session()->has('sucesso')) : ?>
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '<?php echo session('sucesso') ?>',
                showConfirmButton: false,
                imer: 1500
            })
        <?php endif; ?>
    </script>

    <?php echo $this->renderSection('scripts') ?>

    <script type="text/javascript" src="<?= base_url('assets/mask/jquery-1.2.6.pack.js') ?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/mask/jquery.maskedinput-1.1.4.pack.js') ?>"></script>

    <script type="text/javascript">
        $(document).ready(function() {
            $("#cpf").mask("999.999.999-99");
            $("#cnpj").mask("99.999.999/9999-99");
            $("#telefone").mask("(99) 9.9999-9999");
            $("#cep").mask("99999-999");
        });
    </script>
</body>

</html>
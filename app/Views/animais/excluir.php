<?php echo $this->extend('templates/principal');  ?>


<?php echo $this->section('titulo'); ?> <?php echo $titulo; ?> <?php echo $this->endSection(); ?>


<?php echo $this->section('conteudo'); ?>
<!-- enviando todo conteudo para a pagina princial -->
<div class="row">
    <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
            <div class="card-header bg-primary pb-0 pt-4 ">
                <h4 class="card-title text-white"><?php echo esc($titulo); ?></h4>
            </div>
            <div class="card-body">

                <form method="POST" action="<?= base_url($route) ?>/excluir/<?= $animal->id ?>">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Atenção!</strong> Tem certeza que deseja excluir ?
                    </div>

                    <button type="submit" class="btn btn-danger mr-2 btn-sm">
                        <i class="mdi mdi-trash-can btn-icon-append"></i>
                        Excluir
                    </button>


                    <a class="btn text-white btn btn-info btn-sm" href="/">
                        <i class="mdi mdi-arrow-left btn-icon-append"></i>
                        Voltar
                    </a>
                </form>
            </div>
        </div>
    </div>
</div>


<?php echo $this->endSection(); ?>



<?php echo $this->section('scripts'); ?>

<script src="<?php echo site_url('admin/vendors/mask/jquery.mask.min.js'); ?>"></script>
<script src="<?php echo site_url('admin/vendors/mask/app.js'); ?>"></script>

<?php echo $this->endSection(); ?>
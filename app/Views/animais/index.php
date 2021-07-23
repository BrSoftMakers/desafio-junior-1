<?php echo $this->extend('templates/principal');  ?>


<?php echo $this->section('titulo'); ?> <?php echo $titulo; ?> <?php echo $this->endSection(); ?>


<?php echo $this->section('conteudo'); ?>
<!-- enviando todo conteudo para a pagina princial -->

<div class="row">
    <div class="col-lg-12 grid-margin stretch-card">


        <h4 class="card-title"><?php echo $titulo; ?></h4>
        <a class="btn btn btn-success float-right mb-2" href="<?= base_url($route) ?>/novo">
            <i class="icofont-ui-add"></i>
            Adicionar Animal
        </a>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Nome do Animal</th>
                        <th>Tipo do Animal</th>
                        <th>Idade do animal</th>
                        <th>Raça</th>
                        <th>Dono do Animal</th>
                        <th>Telefone</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>

                    <?php foreach ($animal as $animais) : ?>
                        <tr>
                            <td><?php echo $animais->animal_nome ?></td>
                            <td><?php echo $animais->tipo_animal == 'f' ? '<label>Cachorro</label>' : '<label>Gato</label>' ?></td>
                            <td><?php echo $animais->idade ?> anos</td>
                            <td><?php echo $animais->raca ?></td>
                            <td><?php echo $animais->dono ?></td>
                            <td><?php echo $animais->telefone ?></td>
                            <td>
                                <a title="Editar" href="<?= base_url($route) ?>/editar/<?= $animais->id ?>" class="btn btn-sm btn-primary">
                                    <i class="icofont-edit"></i>
                                </a>&nbsp;
                                <a title="Excluir" class="btn btn-sm btn-danger" href="<?= base_url($route) ?>/excluir/<?= $animais->id ?>">
                                    <i class="icofont-ui-delete"></i>
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>

                </tbody>
            </table>
            <div class="mt-3">
                <?php echo $pager->links(); ?>
            </div>
        </div>

    </div>
</div>
<?php echo $this->endSection(); ?>


<?php echo $this->section('scripts'); ?>
<!-- Enviando para o template principal o scripts -->


<?php echo $this->endSection(); ?>
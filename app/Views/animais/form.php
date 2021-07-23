<?php echo $this->extend('templates/principal');  ?>


<?php echo $this->section('titulo'); ?> <?php echo $titulo; ?> <?php echo $this->endSection(); ?>


<?php echo $this->section('conteudo'); ?>
<!-- enviando todo conteudo para a pagina princial -->

<form id="form" method="post" class="form-validate" action="<?= base_url($route) ?>/salvar">
    <?php if ($animal) : ?>
        <input type="hidden" name="id" value="<?= $animal->id ?>" />
    <?php endif; ?>

    <div class="form-row">

        <div class="form-group col-md-3">
            <label for="animal_nome">Nome do Animal</label>
            <input type="text" class="form-control" id="animal_nome" name="animal_nome" value="<?= $animal->animal_nome ?>" autocomplete="off" required>
        </div>



        <div class="col-lg-3">

            <div class="form-group">
                <label class="form-label" for="cnpj">Tipo do Animal</label>
                <select class="form-control" id="tipo_animal" name="tipo_animal" required>
                    <option value="" disabled selected>Selecionar</option>
                    <option value="0" <?php echo ($animal->tipo_animal == 'f' ? 'selected' : '') ?>>Cachorro</option>
                    <option value="1" <?php echo ($animal->tipo_animal == 't' ? 'selected' : '') ?>>Gato</option>
                </select>
            </div>
        </div>

        <div class="form-group col-md-3">
            <label for="raca">Raça</label>
            <input type="text" class="form-control" id="raca" name="raca" value="<?= $animal->raca ?>" autocomplete="off" required>
        </div>
        <div class="form-group col-md-3">
            <label for="idade">Idade</label>
            <input type="number" class="form-control" id="idade" name="idade" value="<?= $animal->idade ?>" autocomplete="off" required>
        </div>
    </div>

    <div class="form-row">
        <div class="form-group col-md-3">
            <label for="dono">Dono do animal</label>
            <input type="text" class="form-control" id="dono" name="dono" value="<?= $animal->dono ?>" autocomplete="off" required>
        </div>


        <div class="form-group col-md-2">
            <label for="telefone">telefone</label>
            <input type="text" class="form-control" id="telefone" name="telefone" value="<?= $animal->telefone ?>" autocomplete="off" required>
        </div>
    </div>

    <button type="submit" class="btn btn-primary mr-2">
        <i class="icofont-save"></i>
        Salvar
    </button>
    <a class="btn btn btn-success float-right mr-2" href="/">
        <i class="icofont-reply"></i>
        voltar
    </a>
</form>

<?php echo $this->endSection(); ?>


<?php echo $this->section('scripts'); ?>

<?php echo $this->endSection(); ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
   
    <title>Tela cadastro</title>
   
</head>
<body>
        <h3 class="text-center">Sistema de gestão de cliníca veterinária</h3><br>
        <h4 class="text-center">Tabela de cadastro de novo cliente</h4><br>
    <div class="text-center">    
    <form action="{{route('ca')  }}" method="post">
    @csrf
        <label for="">Nome do animal</label> <br>
        <input type="text" name="nome_animal" />
        <br>
        <label for="">Idade</label> <br>
        <input type="number" name="idade" />
        <br>
        <label for="">Tipo de animal</label> <br>
        <select class="text-center" name="tipo" size="1" style="width:180px;">   
        <option value="Gato">Gato</option>
        <option value="Cachorro">Cachorro</option>
        </select>
        <br>
        <label for="">raça</label> <br>
        <input type="text" name="raca" />
        <br>
        <label for="">Nome Dono</label> <br>
        <input type="text" name="nome_dono" />
        <br>
        <label for="">telefone</label> <br>
        <input type="tel" id="tel" name="telefone_dono" maxlength="15" pattern="\(\d{2}\)\s*\d{5}-\d{4}" required>
        <br>
        <br>    
        <button class="btn btn-lg btn-primary">Cadastrar</button>
</form>
</div>

<script>
const tel = document.getElementById('tel')
tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value))
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value))

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor
}
</script>    
</body>
</html>


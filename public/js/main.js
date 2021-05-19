    let buttons = document.querySelectorAll('.deleteButton');
    for (let btn of buttons) {
        btn.addEventListener('click', function(){
            if(confirm('Deseja realmente deletar este pet?')) {
                window.location.href='/delete/'+this.dataset.id;
              }
        })
    }

    $(document).ready(function() {
        $('.telefone').mask('(00) 00000-0000');
    })
    




<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>@yield('titulo')</title>
  <link href="{{url('vendors/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
  <link href="{{url('vendors/fontawesome/css/all.min.css')}}" rel="stylesheet">
</head>
<body>
  
  <nav class=" navbar navbar-expand-sm navbar-light" style="background-color: #a9b3f0">
    <div class="container container-fluid">
      <a class="navbar-brand" href="{{ route('site.index') }}">
        <img src="{{url('vendors/img/LovePet.png')}}" width="70" alt="">
      </a>
      
      
      <form action="{{ route('site.show') }}" method="POST" class="form-group d-inline-flex">
        @csrf
        <script>
          function BuscarKey(event) {
            if(event.key == 'Enter') {
              document.querySelector('form').submit();
            }
          }
        </script>
        <input type="search" class="form-control" name='nome' value="{{ old('nome') }}" onkeydown="BuscarKey" placeholder="Buscar Pet" required min="3" max="40">
        @if($errors->has('nome'))
        {{ $errors->first('nome') }}
        @endif 
        
      </form>
      
      
    </div>
  </nav>
  
  <section>
    @yield('conteudo')
  </section>
  
  
  <footer class=" fixed-bottom px-3 py-3" style="background-color: #a9b3f0 ">
    <div class="container d-flex justify-content-between align-items-center">
      <p class="mb-0">Desenvolvido por SalesCodes</p>
      <div>
        <a href="https://twitter.com/salescode_" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="ruansalles" height="30" width="30" /></a>
        <a href="https://www.linkedin.com/in/ruan-sales-7b4051171/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="ruansalles" height="30" width="30" /></a>
        <a href="https://www.instagram.com/osalescodes/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="ruansalles" height="30" width="30" /></a>
        <a href="https://www.instagram.com/osalescodes/" target="blank"><img align="center" src="https://img.icons8.com/ios-filled/50/000000/twitch.png" alt="ruansalles" height="30" width="30" /></a>
      </div>
    </div>
  </footer>
  
  <script src="{{url('vendors/bootstrap/js/bootstrap.min.js')}}" ></script>
  <script src="{{url('vendors/fontawesome/js/all.min.js')}}"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="{{url('js/jquery.mask.min.js')}}"></script>
  <script src="{{url('js/main.js')}}"></script>
  

  
</body>
</html>
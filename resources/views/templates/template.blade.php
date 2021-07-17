<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pet shop - Desafio Dev junior - SoftMakers</title>
	<link rel="stylesheet" type="text/css" href="{{url('assets/bootstrap/css/bootstrap.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{url('assets/bootstrap/css/footer.css')}}">
    <link rel="stylesheet" href="{{url('assets/fontawesome/css/all.css')}}">
</head>
<body>
	@yield('content')

    
    <footer class="footer">
      <div class="container text-xl-center">
        <span class="text-muted">Feito com <i class="fa fa-heart text-danger"></i> - Desenvolvido por André Correia</span>
      </div>
    </footer>

	<script type="text/javascript" src="{{url('assets/js/jquery.js')}}"></script>
	<script type="text/javascript" src="{{url('assets/js/jquery.mask.min.js')}}"></script>
    <script type="text/javascript" src="{{url('assets/fontawesome/js/all.js')}}"></script>
<script type="text/javascript" src="{{url('assets/js/custom.js')}}"></script>

	<script>
		
		(function( $ ) {
  $(function() {
    

    var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
      onKeyPress: function(val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };

    $('.sp_celphones').mask(SPMaskBehavior, spOptions);

   

    $('pre').each(function(i, e) {hljs.highlightBlock(e)});
  });
})(jQuery);
	</script>
</body>
</html>
<?php 
require_once 'app/core/Core.php';
require_once 'app/controllers/DashController.php';
require_once 'app/controllers/NewController.php';
require_once 'app/controllers/EditController.php';
require_once 'app/controllers/DeleteController.php';
require_once 'app/controllers/ErroController.php';
require_once 'lib/database/Connection.php';

require_once 'app/model/Animal.php';
require_once 'vendor/autoload.php';

$page =  file_get_contents('app/view/dash.html');

ob_start();
    $core = new Core;
    $core->start($_GET);

    $pageResult = ob_get_contents();
ob_end_clean();

$pageFinal = str_replace('{{area_dinamica}}', $pageResult, $page);
echo $pageFinal;
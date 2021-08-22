<?php
//arquivo para ser incluído e todos
	session_start();
  if(!isset($_SESSION['usuario'])){
    header("location:index.php?erro=true");
    exit;
  }
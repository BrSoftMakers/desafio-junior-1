<?php
    abstract class Connection{
        private static $conn;
        
        public static function getConn(){
            if(self::$conn == null){
                $host = 'localhost';
                $db_name = 'DEV_DB';
                $user = 'joao';
                $pass = 'root';
                $charset = 'utf8mb4';
                $colate = 'utf8mb4_unicode_ci';
                $dsn = "mysql:host=$host;dbname=$db_name;charset=$charset";
            
                $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_PERSISTENT => false,
                PDO:: ATTR_EMULATE_PREPARES => true,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES $charset COLLATE $colate"
                ];
                self::$conn =new PDO($dsn, $user, $pass, $options);
            }
            return self::$conn;
        }
    }
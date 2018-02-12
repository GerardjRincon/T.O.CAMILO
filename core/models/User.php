<?php

# Seguridad
defined('INDEX_DIR') OR exit('Ocrend software says .i.');

//------------------------------------------------

final class User extends Models implements OCREND {

  public function __construct() {
    parent::__construct();
  }

   final public function usuarios(){

    return $this->db->select('*','users',"Id_user='$this->id_user'");
  }

  final public function cate(){

  	return $this->db->select('Id_categ, Nombre_categ','categoria');
  }

  final public function porcen(){

  	return $this->db->select('Id_categ, Nombre_categ','categoria');
  }
  

  public function __destruct() {
    parent::__destruct();
  }

}

?>

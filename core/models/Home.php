<?php

# Seguridad
defined('INDEX_DIR') OR exit('Ocrend software says .i.');

//------------------------------------------------

final class Home extends Models implements OCREND {

  public function __construct() {
    parent::__construct();
  }

  final public function usuarios(){

  	return $this->db->select('*','users',"Id_user='$this->id_user'");
  }

  public function __destruct() {
    parent::__destruct();
  }

}

?>

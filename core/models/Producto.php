<?php

# Seguridad
defined('INDEX_DIR') OR exit('Ocrend software says .i.');

//------------------------------------------------

final class Producto extends Models implements OCREND {

  public function __construct() {
    parent::__construct();
  }

   final public function producto(){

    return $this->db->select('*','producto');
  }

  
  

  public function __destruct() {
    parent::__destruct();
  }

}

?>

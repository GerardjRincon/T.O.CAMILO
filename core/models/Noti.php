<?php

# Seguridad
defined('INDEX_DIR') OR exit('Ocrend software says .i.');

//------------------------------------------------

final class Noti extends Models implements OCREND {

  public $eliminar;

  public function __construct() {
    parent::__construct();
  }

  public function foo(array $data) : array {

    $id = $this->db->scape($this->id_user);
    # ...
    return $this->db->select('users.Id_user, users.Nombre, producto.Nombre_produc AS Titulo, producto.Img_produc AS Img, producto.Precio_produc AS Precio, producto_user.Precio_total AS Ptotal, producto.Id_produc AS Idp, producto_user.Cantidad AS cantidad','users LEFT JOIN producto_user ON users.Id_user = producto_user.Id_users LEFT JOIN producto ON producto.Id_produc = producto_user.Id_produc',"users.Id_user='$id'");
  }

  public function eliminar(array $data) : array {
    
  
    return array('success' => 1, 'message' =>  $this->db->delete('producto_user',"Id_users='$this->id_user'"));
    
  }

  public function agregar(array $data) : array {
    
    $e = array(
      'Id_produc' => $data['Id'], 
      'Id_users' => $this->id_user
    );  
  
    return array('success' => 1, 'message' => $this->db->insert('producto_user',$e));
    
  }

  public function __destruct() {
    parent::__destruct();
  }

}

?>

<?php

# Seguridad
defined('INDEX_DIR') OR exit('Ocrend software says .i.');

//------------------------------------------------

final class Perfil extends Models implements OCREND {

  public function __construct() {
    parent::__construct();
  }

  final public function usuarios(){

    return $this->db->select('*','users',"Id_user='$this->id_user'");
  }

  final public function carrito(){

    return $this->db->select('users.Id_user, users.Nombre, producto.Nombre_produc AS Titulo, producto.Img_produc AS Img, producto.Precio_produc AS Precio, producto_user.Precio_total AS Ptotal, producto.Id_produc AS Idp, producto_user.Cantidad AS cantidad, producto.Descripcion_produc AS Descripcion','users LEFT JOIN producto_user ON users.Id_user = producto_user.Id_users LEFT JOIN producto ON producto.Id_produc = producto_user.Id_produc',"users.Id_user='$this->id_user'");
    
  }

  final public function Misproductos(){

    return $this->db->select('*','producto',"Id_users='$this->id_user'");
    
  }



  public function __destruct() {
    parent::__destruct();
  }

}

?>

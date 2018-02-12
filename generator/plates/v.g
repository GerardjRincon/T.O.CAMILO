<?= $this->insert('overall/header') ?>
<!-- Body-->
  <body>
   <?= $this->insert('overall/navmovil')?>
   <?= $this->insert('overall/topnav')?>

    <!--BODY DE LA PLANTILLA r-->
    <div class="offcanvas-wrapper">
      <!-- Page Content-->
      <h1>Pagina de inicio</h1>
    
    <?= $this->insert('overall/inner_footer')?>
    <?= $this->insert('overall/footer')?>
    <script>
      $('#entrar').click(function() {
        window.location="Login";
      });
      $('#registrar').click(function() {
        window.location="Registro";
      });
    </script>
  </body>

</html>
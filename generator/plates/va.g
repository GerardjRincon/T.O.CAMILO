<?= $this->insert('overall/header') ?>
<!-- Body-->
  <body>
   <?= $this->insert('overall/navmovil')?>
<?= $this->insert('overall/topnav')?>
    <!--BODY DE LA PLANTILLA r-->
    <div class="offcanvas-wrapper">
      <!-- Page Content-->
      <h1>Página nueva - Ajax</h1>

            <form id="{{view}}_form" role="form">
              <div class="alert hide" id="ajax_{{view}}"></div>
              <div class="form-group">
                <label class="cole">Ejemplo:</label>
                <input type="text" class="form-control form-input" name="ejemplo" placeholder="Escribe algo..." />
              </div>
              <div class="form-group">
                <button type="button" id="{{view}}" class="btn btn-primary">Enviar</button>
              </div>
            </form>
    
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
    <script src="views/app/js/{{view}}/{{view}}.js"></script>
  </body>

</html>
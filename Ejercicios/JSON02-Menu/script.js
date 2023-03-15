
$(document).ready(function() {
  // Petición AJAX para cargar el archivo JSON
  $.ajax({
    url: 'menu.json',
    dataType: 'json',
    success: function(data) {
      // Función para crear el HTML del menú
      crearMenuHTML(data);
    },
    error: function() {
      alert('No se pudo cargar el archivo JSON');
    }
  });
});

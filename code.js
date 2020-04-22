$('#btn-enviar').click(function(){
  $.get("https://my-json-server.typicode.com/rodrigo1985-1997/array-ajax/personas", function(datos, status){
    $.each(datos, function (r, elem) {
      $('.body-tabla').append("<tr><td>" + elem.id + "</td><td>" + elem.nombre + "</td><td>"+ elem.apellido + "</td><td>"+ elem.edad+ "</td></tr>");
        
    });
  });
});



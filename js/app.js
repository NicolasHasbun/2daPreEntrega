function numerosParesHasta(numero) {
    var contador = 0;
    
    for (var i = 0; i <= numero; i++) { //puse 0 porque porque nose si los numeros pares parten de 1 o no
      if (i % 2 === 0) {
        contador++;
      }
    }
    
    return contador;
  }
  
  
  var numeroHasta = 10;
  var cantidadPares = numerosParesHasta(numeroHasta);
  
  alert("La cantidad de números pares hasta " + numeroHasta + " es: " + cantidadPares);

  //de momento puse esta funcion de numeros pares en el index pero cuando sepa que quiero crear para mi pagina web la modificare acorde al contenido de la pagina que en este caso es de un videjuego.
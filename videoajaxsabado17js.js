function ajax_get_json(){

    var resultado=document.getElementById("info");
    /*El id info se lo asignamos a la variable resultado*/

    var xmlhttp;

    if(window.XMLHttpRequest){ 
        /*Cuando es los nagevadores modernos(google chrome)*/

         xmlhttp=new XMLHttpRequest();

     }else{ 
         /*Si son navegadores antiguos explore 5*/

         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

     }

     /*onreadystatechange, se encarga de procesar la respuesta enviada por el servidor*/

     xmlhttp.onreadystatechange=function(){

          /*xmlhttp.readyState==4&&xmlhttp.status==200, estamos diciendo ha sido finalizada

              y exitosa, entonces debemos obtener la informacion y poder verla en la pantalla*/

             if(xmlhttp.readyState==4&&xmlhttp.status==200){

             /*xmlhttp.renposeText, una cadena hacia un objeto de json JSON.parse()*/

                    var datos= JSON.parse(xmlhttp.responseText);

                    /*La información obtenida se está convirtiendo en un objeto de JSON*/

                    console.log(datos);/*Imprimir en consola*/

                    if(resultado.innerHTML==""){/*Para que no se repite el contenido*/

                             for(var i in datos){

                                     resultado.innerHTML += i + ": " + datos[i] + "<br/>";

                              }

                    }

              }
        }

        xmlhttp.open("GET","abril.json",true);
        /*Recibe 3 parametros, 1 el tipo de metodo que estamos 

         utilizando Get porque estamos obteniendo información, 2 el nombre del documento 

         donde queremos adquirir la información, 3 si es true o false para decirle que si es una 

          petición asincrona*/

         xmlhttp.send();/*Mostrar*/

   }
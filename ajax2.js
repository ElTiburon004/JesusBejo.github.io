// https://www.youtube.com/watch?v=M4LaQ3KUGOM&t=607s
console.log('correcto');

document.querySelector('#boton').addEventListener('click',traerDatos());
function traerDatos(){

console.log('dentro de la función');

  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://eltiburon004.github.io/JesusBejo.github.io/abril.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function (){
  	if(this.readyState == 4 && this.status == 200){
  
    
  		let datos = JSON.parse(this.responseText);
 
      let res = document.querySelector('#res');
      res.innerHTML = '';

      for(let item of datos){
    
       res.INNERhtml += `
       <tr>
       <td>${item.fecha}</td>
       <td>${item.indicativo}</td>
       <td>${item.nombre}</td>
       <td>${item.provincia}</td>
       <td>${item.altitud}</td>
       <td>${item.tmed}</td>
       <td>${item.prec}</td>
       <td>${item.tmin}</td>
       <td>${item.horatmin}</td>
       <td>${item.tmax}</td>
       <td>${item.horatmax}</td>
       <td>${item.dir}</td>
       <td>${item.velmedia}</td>
       <td>${item.racha}</td>
       <td>${item.horaracha}</td>
       </tr>
        `
    }
  }
}

}

console.log('al final de todo');

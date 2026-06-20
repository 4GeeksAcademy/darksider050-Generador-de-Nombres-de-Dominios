import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  
  // 1. Buscamos el elemento donde vamos a mostrar los dominios
  let listElement = document.getElementById("domain-list");

  // 2. Recorremos los arrays
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        
        // 3. Creamos un nuevo elemento <li> por cada combinación
        let newLi = document.createElement("li");
        newLi.innerText = `${p}${a}${n}.com`;
        
        // 4. Lo añadimos a la lista en el HTML
        listElement.appendChild(newLi);
      }
    }
  }
};


function myFunction() {
    var x = document.getElementById("menuresponsive"); /*obtenir l'element menú perquè es mostri*/
    
    if (x.className === "menulist") { /*si la classe és la indicada, s'afegeix la classe "responsive" al menú*/
      x.className += "responsive";
    }
    else {
      x.className = "menulist"; /*a més a més, la classe segueix sent la de "menulist"*/
    }
}
    /*Alterna entre afegir i eliminar la classe "responsive" a la classe del menú quan l'usuari fer click a la icona d'hamburguesa*/

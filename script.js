function IrFormularioAux(){
    location.href="formularioCrearAux.html";
}

function main (){
    document.getElementById("botonformularioAux").addEventListener("click",IrFormularioAux);
}
window.onload=main;     
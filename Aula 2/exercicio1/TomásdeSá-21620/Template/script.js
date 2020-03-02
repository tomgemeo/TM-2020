function atualizaTexto(){
    var texto = document.getElementById(  "inputTexto").value;
   if(!texto.length) alert("Escreve algo no Input,Rafita");
    document.getElementById("texto").innerText = texto;
}
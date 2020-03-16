var arrayNumber=[];

function adicionarNumero(){
    document.getElementById( "newNumbers").value;
    arrayNumber.push(parseInt(document.getElementById( "newNumbers").value));
    console.log(arrayNumber);

}
function calcular(){
    alert(Math.max.apply(Math,arrayNumber));

}

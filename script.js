function insert(num){
    var number = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML= number + num;

}


function del(){
    var apagar = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = apagar.substring(0, apagar.length -1)
}
function calcular(){
    var resultado = document.getElementById('display').innerHTML;
    if(resultado){
        document.getElementById('display').innerHTML = eval(resultado);

        if (display === Infinity){
            document.getElementById('display').innerHTML = "you can divide per 0.."
        } 
    }
   
    else{
        document.getElementById('display').innerHTML = "Null..."
    }
}

function clean(){
    document.getElementById('display').innerHTML = "";
}

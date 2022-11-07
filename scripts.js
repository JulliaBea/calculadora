const currentOperation = document.querySelector('#current-operation');
const previousOperation = document.querySelector('#previous-operation');
const buttons = document.querySelectorAll('.btns button');

function insert(valor){
    //Exclui o 0 inicial e adiciona o valor digitado direto 
    if(valor === '.') {    
        currentOperation.innerHTML += '.';
    } else if (currentOperation.innerHTML === '0'){
        currentOperation.innerHTML = valor;
    } else {
        currentOperation.innerHTML += valor;
    } 
}

function clearAll(){
    currentOperation.innerHTML = '0';
}

function backspace(){
    
    if(currentOperation.textContent){
        let result = document.getElementById('current-operation').innerHTML
        result = result.substring(0, result.length -1); 
        if(result.length>0) {
            currentOperation.innerHTML = result;
        } else {
            currentOperation.innerHTML = '0';
        }  
    } 
}


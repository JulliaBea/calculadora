const currentOperation = document.querySelector('#current-operation');
const previousOperation = document.querySelector('#previous-operation');
const buttons = document.querySelectorAll('.btns button');
const operations = document.querySelectorAll('.op');

let num1;
let num2;
let op;

function insert(value){         //tenta criar uma função pra calc e nela vc apaga o currentoperation.innerText
    // Checa se o valor atual ja tem um ponto
    
    if(value === '.' && currentOperation.innerText.includes(".")){
        return;
    }
    
    if (value === '/'|| value ==='*'|| value === '-'|| value === '+'){
        previousOperation.innerText = currentOperation.textContent + ` ${value}`;
        currentOperation.innerText = null; //arrumar isso aqui
        num1 = previousOperation.innerText.substring(0, previousOperation.innerText.length -2);
        op = value;
        return
    }
    
    if(value === '.') {    
        currentOperation.innerText += '.'; // O '0' inicial permanece e é adicionado um ponto
    } else if (currentOperation.innerText === '0'){ // Exclui o 0 inicial e adiciona o value digitado direto
        currentOperation.innerText = value;
    } else {
        currentOperation.innerText += value;
    } 
}

console.log(num1);

function calc(operation){

    currentOperation.innerText = null;

}

function clearAll(){
    currentOperation.innerText = '0';
    previousOperation.innerText = '';
}

function backspace(){
    
    if(currentOperation.textContent){
        let valueText = document.getElementById('current-operation').innerText;
        valueText = valueText.substring(0, valueText.length -1); 
        if(valueText.length>0) {
            currentOperation.innerText = valueText;
        } else {
            currentOperation.innerText = '0';
        }  
    } 
}

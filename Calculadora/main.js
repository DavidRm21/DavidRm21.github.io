const keysContainer = document.querySelector('.key-calculator');
const screenResult = document.querySelector('.result-calculator');


const patternKeys = ['C', 'DEL', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='];
const keyFunctions = [eraseResult, eraseUnityKey, operationKey, numberKey, equalsKey];


function keysCalculator(arr){
    for(i = 0; i < patternKeys.length; i++){
        const key = document.createElement('div');
        key.classList.add('key-calc');

        key.innerText = arr[i];
        key.addEventListener('click', eraseResult);

        keysContainer.appendChild(key);
        
    }
}

function eraseResult(){
    screenResult.innerText = '';
}

function eraseUnityKey(){

}

function operationKey(){

}

function numberKey(){
    
}

function equalsKey(){

}

keysCalculator(patternKeys);
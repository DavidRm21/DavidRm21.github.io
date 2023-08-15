const keysContainer = document.querySelector('.key-calculator');
const screenResult = document.querySelector('.result-calculator');


const patternKeys = ['C', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='];
const operation = [];


function keysCalculator(arr){
    for(i = 0; i < arr.length; i++){
        const key = document.createElement('div');
        key.classList.add('key-calco');
        key.setAttribute('value', arr[i])

        keysContainer.appendChild(key);

        key.innerText = arr[i];
        key.addEventListener('click', () => {

            /* https://www.youtube.com/watch?v=hZFEgkrOwks */
            const keyPress = key.textContent;

            if(keyPress === 'C'){
                screenResult.textContent = '0';
                return;
            }
            if(keyPress === 'DEL'){
                if(screenResult.textContent.length === 1){
                    screenResult.textContent = '0';
                }else{
                    screenResult.textContent = screenResult.textContent.slice(0, -1);
                }
                return;
            }
            if(keyPress === '+' && !screenResult.textContent[-1] === '+'){
                screenResult.textContent += keyPress;
                return;
            }
            if(keyPress === '='){
                try{
                    screenResult.textContent = eval(screenResult.textContent);
                }catch{
                    screenResult.textContent = 'Syntax Error';
                }
                return;
            }
            if(keyPress === '+/-'){
                if(screenResult.textContent.length > 0){
                    if(screenResult.textContent[0] === '-'){
                        screenResult.textContent = screenResult.textContent.slice(1);
                    } else{
                        screenResult.textContent = '-' + screenResult.textContent;
                    }
                }
                return;
            }

            if(screenResult.textContent === '0' || screenResult.textContent === null || screenResult.textContent === 'Syntax Error'){
                screenResult.textContent = keyPress;
            }else{
                screenResult.textContent += keyPress;
            }

        });
    }
}

keysCalculator(patternKeys);
let numberA = '' ;
let numberB = '' ;
let operator = '' ;

const numbersBtn = document.getElementsByClassName("numbers");
const operatorBtn = document.getElementsByClassName("operators");
const equalstoBtn = document.querySelector(".equalsto");
const clearBtn = document.querySelector(".clear");
const sqrtBtn = document.querySelector(".sqrt");
const resultScreen = document.querySelector(".screen-result");
const operatorScreen = document.querySelector(".screen-operator");

numbersBtn[0].addEventListener("click",registerNumbers);
numbersBtn[1].addEventListener("click",registerNumbers);
numbersBtn[2].addEventListener("click",registerNumbers);
numbersBtn[3].addEventListener("click",registerNumbers);
numbersBtn[4].addEventListener("click",registerNumbers);
numbersBtn[5].addEventListener("click",registerNumbers);
numbersBtn[6].addEventListener("click",registerNumbers);
numbersBtn[7].addEventListener("click",registerNumbers);
numbersBtn[8].addEventListener("click",registerNumbers);
numbersBtn[9].addEventListener("click",registerNumbers);
numbersBtn[10].addEventListener("click",registerNumbers);

operatorBtn[0].addEventListener("click",registerOperators)
operatorBtn[1].addEventListener("click",registerOperators)
operatorBtn[2].addEventListener("click",registerOperators)
operatorBtn[3].addEventListener("click",registerOperators)


clearBtn.addEventListener("click",clear)

sqrtBtn.addEventListener("click",squareroot)

equalstoBtn.addEventListener("click",calculation)

function registerNumbers(event){
    const buttonsPressed = event.target
    const pressedValue = buttonsPressed.textContent;
    if(!operator){
        numberA+=pressedValue;
        resultScreen.value = numberA;
    }
    else{
        numberB+=pressedValue;
        resultScreen.value = numberB;
    }
}

function registerOperators(event){
    console.log(event.target.className);
    switch(event.target.className){
        case "operators divide" :
            operator = '/'
            operatorScreen.value = '/';
            break;        
        case "operators plus" :
            operator = '+'
            operatorScreen.value = '+';
            break;
        case "operators minus" :
            operator = '-'
            operatorScreen.value = '-';
            break;
        case "operators multiply" :
            operator = '*'
            operatorScreen.value = 'x';
            break;
        }
    }
    


function calculation(){
    switch(operator){
        case '+' :
        const result_plus =  Number(numberA) + Number(numberB);
        resultScreen.value = result_plus;
            numberA = result_plus;
            numberB = ''
            operator = ''
        
        break;
        case '-' :
        const result_minus =  Number(numberA) - Number(numberB);
        resultScreen.value = result_minus;
            numberA = result_minus;
            numberB = ''
            operator = ''        
        break;
        case '*' :
            const result_mult =  Number(numberA) * Number(numberB);
            resultScreen.value = result_mult;
            numberA = result_mult;
            numberB = ''
            operator = '' 
        break;
        case '/' :
            const result_divide =  Number(numberA) / Number(numberB);
            resultScreen.value = result_divide;
            numberA = result_divide;
            numberB = ''
            operator = '' 
        break;
    }
}

function clear(){
    resultScreen.value = ''
    operatorScreen.value=''
    numberA = ''
    numberB = ''
    operator = ''
}

function squareroot(){
    result_sqrt = Math.sqrt(numberA);
    resultScreen.value =result_sqrt ;
    numberA = result_sqrt;
}
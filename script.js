//cleclarar de variables
let userInput = document.getElementById('text-input')
let btn = document.getElementById('check-btn')
let result = document.getElementById('result')

//funcion ingreso
let checkPalindromo = input =>{
    let originalInput=input;
}

//verificacion si es ta vacio el input y dan click
if(input===''){
    alert('Please input a value')
    return
}

//borramos el span
result.replaceChildren();

let lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
let resultMsg= `${originalInput} ${lowerCaseStr === [...lowerCaseStr].reverse().join('')? 'is':'is not'} a palindrome.`;

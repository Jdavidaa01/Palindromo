//cleclarar de variables
let userInput = document.getElementById('text-input')
let btn = document.getElementById('check-btn')
let result = document.getElementById('result')

//funcion ingreso
let checkPalindromo = input =>{
    let originalInput=input;

//verificacion si es ta vacio el input y dan click
if(input===''){
    alert('Please input a value')
    return
}

//borramos el span
result.replaceChildren();
// verificamos si es un palindromo 
let lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
//primero al ingreso del input le decimos que deje todas las letras
//y numeros del 0-9  luego trasformamos todo a minuscula
let resultMsg= `${originalInput}${lowerCaseStr === [...lowerCaseStr].reverse().join('')? ' is':' is not'} a palindrome.`;
//armamos el mensaje del span seria el texto ingresado

let pTag= document.createElement('p');
pTag.className='user-Input';
pTag.innerText=resultMsg;
result.appendChild(pTag);

//mostramos el resultado
result.classList.remove('hidden');
};

btn.addEventListener('click',() =>{
    checkPalindromo(userInput.value);
    userInput.value='';
});

userInput.addEventListener('keydown',e =>{
    if(e.key === 'Enter'){
        checkPalindromo(userInput.value);
        userInput.value='';
    }
});

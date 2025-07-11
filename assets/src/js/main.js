const result = document.querySelector('#result');
const no7 = document.querySelector('#no7');
const no8 = document.querySelector('#no8');
const no9 = document.querySelector('#no9');
const no6 = document.querySelector('#no6');
const no5 = document.querySelector('#no5');
const no4 = document.querySelector('#no4');
const no3 = document.querySelector('#no3');
const no2 = document.querySelector('#no2');
const no1 = document.querySelector('#no1');
const no0 = document.querySelector('#no0');
const clearBtn = document.querySelector('#clearBtn');
const delBtn = document.querySelector('#delBtn');

const additionOperator = document.querySelector('#additionOperator');
const minusOperator = document.querySelector('#minusOperator');
const multiplicationOperator = document.querySelector(' #multiplicationOperator');
const divisionOperator = document.querySelector('#divisionOperator');
const decimalOperator = document.querySelector('#decimalOperator');
const equalOperator = document.querySelector('#equalOperator');

let calc = "";

no9.addEventListener('click', function(){
  calc = calc + "9";
  result.textContent = calc; 
});

no8.addEventListener('click', function(){
  calc = calc + "8";
  result.textContent = calc; 
});

no7.addEventListener('click', function(){
  calc = calc + "7";
  result.textContent = calc; 
});

no6.addEventListener('click', function(){
  calc = calc + "6";
  result.textContent = calc; 
});

no5.addEventListener('click', function(){
  calc = calc + "5";
  result.textContent = calc; 
});

no4.addEventListener('click', function(){
  calc = calc + "4";
  result.textContent = calc; 
});

no3.addEventListener('click', function(){
  calc = calc + "3";
  result.textContent = calc; 
});

no2.addEventListener('click', function(){
  calc = calc + "2";
  result.textContent = calc; 
});

no1.addEventListener('click', function(){
  calc = calc + "1";
  result.textContent = calc; 
});

no0.addEventListener('click', function(){
  calc = calc + "0";
  result.textContent = calc; 
});

additionOperator.addEventListener('click', function(){
  calc = calc + "+";
  result.textContent = calc; 
});

minusOperator.addEventListener('click', function(){
  calc = calc + "-";
  result.textContent = calc; 
});

divisionOperator.addEventListener('click', function(){
  calc = calc + "/";
  result.textContent = calc; 
});

multiplicationOperator.addEventListener('click', function(){
  calc = calc + "*";
  result.textContent = calc; 
});

decimalOperator.addEventListener('click', function(){
  calc = calc + ".";
  result.textContent = calc; 
});

equalOperator.addEventListener('click', function(){
  calc = eval(calc);
  result.textContent = calc; 
});


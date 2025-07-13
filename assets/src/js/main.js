const result = document.querySelector('#result');
const clearBtn = document.querySelector('#clearBtn');
const delBtn = document.querySelector('#delBtn');
const toggleBar = document.querySelector('#toggleBar');
const calculator = document.querySelector('#calculator');
const toggle = document.querySelector('#toggle');

const primaryBtns = document.querySelectorAll('.btn__primary');

primaryBtns.forEach(x => {
  x.addEventListener('click', () => {
    displayBtnContent(x.textContent);
  })
})

function displayBtnContent(x){
  calc = calc + "x";
  result.textContent = calc;
}

const equalOperator = document.querySelector('#equalOperator');

const body = document.querySelector('body')

let calc = "";


equalOperator.addEventListener('click', function(){
  calc = eval(calc);
  result.textContent = calc; 
});

clearBtn.addEventListener('click', function(){
  calc = 0;
  result.textContent = "";
});

delBtn.addEventListener('click', function(){
  calc = calc.slice(0,-1);
  result.textContent = calc;
})

toggleBar.addEventListener('click', () => {
  toggle.classList.toggle('nightMode');
  if(toggle.classList.contains('nightMode')){
    toggle.textContent = "🌙"
    body.style.background = "rgb(36, 31, 37)";
    calculator.style.background = "lightblue";
    toggleBar.style.background = "rgb(36, 31, 37)"
  } else{
    toggle.textContent = '☀️'
    body.style.background = "rgba(245, 169, 5, 1)";
     calculator.style.background = "black";
     toggleBar.style.background = "rgba(160, 112, 8, 1)"
  }
})
const amount = document.getElementById('value-amount');
const customPercentage = document.getElementById('custom');
const people = document.getElementById('number-people');
const percentageButton = document.querySelectorAll('.percentage');
const buttonReset = document.getElementById('button-reset');

const tipAmountText = document.getElementById('tip-amount-text');
const totalText = document.getElementById('total');

let porcetageValue = 0;
let numPeople = 1;

amount.addEventListener('input', () => {
  total()
  tipCalc()
});

customPercentage.addEventListener('input', () => {
    customPercentage.classList.add('active-buttom-selected');
  porcetageValue = customPercentage.value;
  total()
  tipCalc()
})

customPercentage.addEventListener('click', () => {
  resetButtonProps()
  customPercentage.classList.add('active-buttom-selected');
})

people.addEventListener('input', () => {
  numPeople = people.value;
  if (numPeople == 0 || numPeople == ''){
    numPeople = 1;
  }
  tipCalc();
  total()
});

percentageButton.forEach(button => {
  button.addEventListener('click', () => {
    resetButtonProps();
    porcetageValue = button.value;
    button.classList.add('active-buttom-selected');
    total()
    tipCalc()
  })
})

buttonReset.addEventListener('click', () => {
  resetButton()
})

function total() {
  const result = amount.value / 100 * porcetageValue;
  
  totalText.innerText = '$ ' + result.toFixed(2)
}

function tipCalc() {
  const result = (amount.value / 100 * porcetageValue) / numPeople;
  
  tipAmountText.innerText = '$ ' + result.toFixed(2)
}

function resetButtonProps() {
  percentageButton.forEach(button => {
    button.classList.remove('active-buttom-selected')
  })
  
    customPercentage.classList.remove('active-buttom-selected');
};

function resetButton() {
    resetButtonProps();
    totalText.innerText = '$ 0,00';
    tipAmountText.innerText = '$ 0,00';
    people.value = 1;
    numPeople = 1;
    amount.value = 0;
};
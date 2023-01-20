import cardValidator from './cardValidator';

function cardIssuerCheck() {
  const inputValue = document.getElementsByClassName('card-validator__input')[0].value;
  if (cardValidator(inputValue)) {
    document.getElementsByClassName('card-validator__check-status')[0].textContent = '✅ Card validate';
  } else {
    document.getElementsByClassName('card-validator__check-status')[0].textContent = '❌ Card not validate';
  }
}

const buttonCheckCard = document.getElementsByClassName('card-validator__button')[0];
if (buttonCheckCard) {
  buttonCheckCard.addEventListener('click', cardIssuerCheck);
}

const inputCardNumber = document.getElementsByClassName('card-validator__input')[0];
if (inputCardNumber) {
  inputCardNumber.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      cardIssuerCheck();
    }
  });
}

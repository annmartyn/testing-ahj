export default function cardIssuer(value) {
  const inputValue = value.replace(/\D/g, '');
  const firsSixNubmerOfCard = Number(inputValue.slice(0, 6));
  let bankHolder = null;
  if (/^2/.test(inputValue) && !(firsSixNubmerOfCard >= 222100 && firsSixNubmerOfCard <= 272099)) {
    bankHolder = 'mir';
  } else if (/^4/.test(inputValue)) {
    bankHolder = 'visa';
  } else if (/^3[47]/.test(inputValue)) {
    bankHolder = 'american-express';
  } else if (/^30[12345]|^3/.test(inputValue) && !(/^352[89]|^35[3-8][0-9]/.test(inputValue))) {
    bankHolder = 'dinnersclub';
  } else if (/^352[89]|^35[3-8][0-9]/.test(inputValue)) {
    bankHolder = 'jcb';
  } else if (/^6011|^64[4-9]|^65/.test(inputValue)) {
    bankHolder = 'discover';
  } else if (firsSixNubmerOfCard >= 622126 && firsSixNubmerOfCard <= 622925) {
    bankHolder = 'discover';
  } else if (/^5018|^5020|^5038|^5893|^6304|^6759|^676[1-3]|^5[1-5]/.test(inputValue)) {
    bankHolder = 'master-card';
  } else if (firsSixNubmerOfCard >= 222100 && firsSixNubmerOfCard <= 272099) {
    bankHolder = 'master-card';
  }
  return bankHolder;
}

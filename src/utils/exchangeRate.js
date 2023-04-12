import $ from 'jquery'; 
const apiKey = localStorage.getItem("exchangeAPI")


export default function exchangeRate() {
  const $userAmount = $('#userAmount');
  const $exchange1Drop = $('#amountDrop');
  const $exchange2Drop = $('#resultDrop');


  const exchange_1 = $exchange1Drop.val();
  const exchange_2 = $exchange2Drop.val();
  const user_Amount = $userAmount.val();
  
  const exchangeURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${exchange_1}`





  const rateEL = $('#exchangeResult');


  fetch(exchangeURL)
  .then((response) => response.json())
  .then((data) => {
    const rate = data.conversion_rates[exchange_2];
    rateEL.text( `${user_Amount} ${exchange_1} = ${rate * user_Amount}  ${exchange_2}`)
  });

}

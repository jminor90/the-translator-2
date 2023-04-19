import $ from 'jquery'; 
import exchangeRate from './exchangeRate';
import translateLanguage from './translateLanguage';

export default function destination(data) {
  // const $resultSymbol = $('#resultSymbol')
  const $language1Input = $('#language1Input')

  const dataCurrencies = JSON.stringify( data[0].currencies).split("\"")[1]
const dataLanguage = JSON.stringify(data[0].languages).split("\"")[3]
const dataLanguage2 = JSON.stringify(data[0].languages).split("\"")[7]
const dataFlag = data[0].flags.png

const $resultFlag = $('#resultFlag')
const $imgFlag = $('<img>')

const $resultDrop = $('#resultDrop')

$resultFlag.html('');
// $resultSymbol.html('');

  console.log("This is Script.js")
  // console.log(data)
  console.log($resultFlag)

  console.log(dataCurrencies)
  console.log(dataLanguage)
  console.log(dataLanguage2)
  console.log(dataFlag)
  
  // resultFlag.append(resultFlag)

  $imgFlag.attr("src", dataFlag)
  $imgFlag.attr("id", "flag")
  $resultFlag.append($imgFlag)

  $resultDrop.val(dataCurrencies)
  $language1Input.val(dataLanguage)
  exchangeRate();
  translateLanguage();
}


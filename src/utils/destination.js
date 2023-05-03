import $ from 'jquery';
import exchangeRate from './exchangeRate';
import translateLanguage from './translateLanguage';

export default function destination(data) {
  // const $resultSymbol = $('#resultSymbol')
  const $language1Input = $('#language1Input')

  const dataCurrencies = JSON.stringify(data[0].currencies).split("\"")[1]
  const dataLanguage = JSON.stringify(data[0].languages).split("\"")[3]
  const dataLanguage2 = JSON.stringify(data[0].languages).split("\"")[7]
  const dataFlag = data[0].flags.png

  const $resultFlag = $('#resultFlag')
  const $imgFlag = $('<img>')

  const $resultDrop = $('#resultDrop')

  const $languageList = $('#languageList')

  // Reset results before new results, so that things don't double up.
  $languageList.html('');
  $resultFlag.html('');

  let langObj = data[0].languages
  let lenObj = Object.keys(langObj).length
  let keyObj = Object.keys(langObj)
  let langArray = []

  // console.log(langObj)
  // console.log(keyObj)
  console.log(`Total languages ` + lenObj)

  // Takes languages spoken and pushes them to list
  for (let i = 0; i < lenObj; i++) {
    const element = langObj[keyObj[i]];

    langArray.push(element)

  }



  console.log(langArray)
  // Takes the array of Languages (langArray) and pushes them to unordered list to the DOM
  const $ul = $('<ul>', { class: "mylist" }).append(
    langArray.map(country => 
      $("<li>").append($("<a>").text(country))
    )
  );

  $languageList.append($ul)
  // for (let i = 0; i < langArray.length; i++) {
  //   console.log('Languages Spoken ' + langArray[i])
  // }

  $imgFlag.attr("src", dataFlag)
  $imgFlag.attr("id", "flag")
  $resultFlag.append($imgFlag)

  $resultDrop.val(dataCurrencies)


  // if the first result is English, chooses 2nd language as the default result.
  if (dataLanguage !== "English") {
    $language1Input.val(dataLanguage)
  } else {
    $language1Input.val(dataLanguage2)
  }



  exchangeRate();
  translateLanguage();
}


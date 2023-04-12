import $ from 'jquery'; 
const translateAPIkey = localStorage.getItem("googleAPI")

const cloudURL = `https://translation.googleapis.com/language/translate/v2/languages?key=${translateAPIkey}&target=en`
const translateURL = `https://translation.googleapis.com/language/translate/v2?key=${translateAPIkey}`

export default function translateLanguage() {

  const $language1Input = $('#language1Input')
  let language1Input = $language1Input.val()

  // const $language2Input = $('#language2Input')
  // let language2Input = $language2Input.val()

  const seachBarVal = $language1Input.val()

  // if (seachBarVal === undefined) {

  //   $alertModal.css('display', 'block')
  //   $alertText.text("You entered nothing.")
  //   return;
  // } else {

  //   nametoCodeAPI(seachBarVal)
  // }
  nametoCodeAPI(seachBarVal)
  console.log('The user entered: ' + seachBarVal)
}

function nametoCodeAPI(seachBarVal) {


  fetch (cloudURL)
  .then(function(serverResponse) {
    if (serverResponse.status !== 200 ) {

      alert("UH OH"+serverResponse.status)
      
      console.log("uh oh"+serverResponse.status)
    } else {
      return serverResponse.json();
      
    }
  })
  .then(function(data) {
    nameToCode(data, seachBarVal)
    // console.log(data)
  })

}

function nameToCode(data, SteveSearchBar) {
  const found = data.data.languages.find(ElementBob => SteveSearchBar == ElementBob.name)
  
  // if Found Language is not a real language will catch
  if (!found) {
    alert("Alert: Is that a valid language?")
  } else {

    const foundLang = found.language


    console.log(data)
    console.log(SteveSearchBar)
    console.log(foundLang)

    translateAPI(foundLang)
  }

}


function translateAPI(foundLang) {
  const $userTranslateInput = $('#userTranslateInput')
  let userTranslateInput = $userTranslateInput.val().trim()

  fetch (translateURL, {
    method: "POST",
    body: JSON.stringify({
      q: userTranslateInput,
      source: "en",
      target: foundLang,
      format: "text"
    })
  })
  .then (function (serverResponse) {
    if (serverResponse.status !== 200) {

      alert("UH-OH: "+serverResponse.status+" | Also cannot translate English to English.")

      console.log("Oh No! Error: "+serverResponse.status)
    } else {
      return serverResponse.json()
    }
  })
  .then (function(translateData) {
    // console.log(translateData)
    renderResult(translateData)
  })
}

function renderResult (translateData){
  const $translateResult = $('#translateResult')

  let translateResult = translateData.data.translations[0].translatedText

  $translateResult.text(translateResult)

}
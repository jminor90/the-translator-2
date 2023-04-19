import translateLanguage from '../utils/translateLanguage.js'
export default function Language() {

  function translate(e) {
    e.preventDefault()


    translateLanguage()
  }

  return (
    <div class="container-fluid col-lg-6 d-flex justify-content-center">
      <div class="card vw-100">
      <h2 class="d-flex align-items-center flex-column">Language Translator</h2>
        <div class="card-body d-flex justify-content-center m-1">
          <div class="language">

            <div>
              <form class="langTrans d-flex align-items-center flex-column">
                <input class=" m-1" type="search" id="userTranslateInput" placeholder="Desired Translation" />
                <div class="d-flex align-items-center flex-column">
                  <input class=" m-1" type="search" id="language1Input" placeholder="Desired Language" />
                  <button class=" m-1" id="LanguageSubmit" onClick={translate}>Translate</button>
                </div>

              </form>
            </div>
            <div>
              <div class="containerDiv" id="resultDiv">

              </div>
              <h3 class="trans">
                Translation Here:
              </h3>
              <p class=" d-flex align-items-center flex-column fs-5" id="translateResult">

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
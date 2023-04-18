import translateLanguage from '../utils/translateLanguage.js'
export default function Language() {

  function translate(e) {
    e.preventDefault()


    translateLanguage()
  }

  return (
    <div class="container-fluid col-lg-6 ">
      <div class="card">
      <h2>Language Translator</h2>
        <div class="card-body">
          <div class="language">

            <div>
              <form class="langTrans">
                <input type="search" id="userTranslateInput" placeholder="Desired Translation" />
                <div>
                  <input type="search" id="language1Input" placeholder="Desired Language" />
                  <button id="LanguageSubmit" onClick={translate}>Translate</button>
                </div>

              </form>
            </div>
            <div>
              <div class="containerDiv" id="resultDiv">

              </div>
              <h3 class="trans">
                Translation Here:
              </h3>
              <p id="translateResult">

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
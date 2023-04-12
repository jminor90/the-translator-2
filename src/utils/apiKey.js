export default function apiKey() {

  const exchangeAPI = localStorage.getItem("exchangeAPI")

  const googleAPI = localStorage.getItem("googleAPI")

  if (exchangeAPI === null) {
    const exchangeAPI = prompt("Enter Exchange Rate API Key")

    if (exchangeAPI === null) {
      window.alert("Cannot continue unless you enter a valid Exchange Rate API key").trim()
      apiKey();
    }
    
    if (exchangeAPI !== null) {
      localStorage.setItem("exchangeAPI", exchangeAPI)
      window.location.reload();
    }
    

  }

  if (googleAPI === null) {
    const googleAPI = prompt("Enter Google Translate API Key")

    if (googleAPI === null) {
      window.alert("Cannot continue unless you enter a valid Google Translate API Key").trim()
      apiKey();
    }

    if (googleAPI !== null) {
      localStorage.setItem("googleAPI", googleAPI)
      window.location.reload();
    }

  }

}




import Navbar from "./Navbar"
import Currency from "./Currency"
import Language from "./Language"
import Footer from "./Footer"
import apiKey from "../utils/apiKey.js"

export default function AppContainer() {
  // Checks local storage if key exists, if not prompt to enter API key on startup
  apiKey();
  
  return (
    <>
      <Navbar />
      <div class="container-fluid row">
        <Currency />
        <Language />
      </div>
      <Footer />
    </>
  )

}
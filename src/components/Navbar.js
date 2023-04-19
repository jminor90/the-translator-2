import destination from '../utils/destination.js';
import * as dayjs from 'dayjs'
const currentDate = dayjs().format('MMMM DD, YYYY');


export default function Navbar() {
  
  function handleSubmit(e) {
    const searchBar = document.getElementById("searchBar")
    const searchBarVal = searchBar.value
    e.preventDefault();
    console.log('You clicked submit.');
    console.log(searchBar)
    console.log(searchBarVal)

    getRestCountryAPI(searchBarVal)
  }

  const getRestCountryAPI = (searchBarVal) => {
    const countriesURL = `https://restcountries.com/v3.1/name/${searchBarVal}`;

    fetch (countriesURL)
    .then(function(serverResponse) {
      if (serverResponse.status !== 200 ) {
        alert("UH OH"+serverResponse.status)  
        console.log("uh oh: "+serverResponse.status)
      } else {
        return serverResponse.json();
      }
    })
    .then (function(data) {
      console.log(data)

      destination(data)

    })
    
  }


  return (
    <nav class="navbar bg-body-tertiary mb-2">
      <div class="container-fluid d-flex flex-row-reverse">

        <a class="navbar-brand text-decoration-underline fw-bold fs-4" href="#">The Tran$lator</a>

        <div id="currentDate">
          <p class="fw-bold">Today is {currentDate}</p>
        </div>

        <form class="d-flex" role="search" onSubmit={handleSubmit}>

          <input class="form-control me-2" type="search" aria-label="Search" id="searchBar" placeholder="Enter Your Destination..." />
            <button class="btn btn-outline-primary" type="submit" id="submitButton" >Search</button>

        </form>


      </div>
    </nav>
  )
}
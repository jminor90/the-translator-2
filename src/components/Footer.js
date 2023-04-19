export default function Footer() {

  function removeFunction(e) {
    e.preventDefault()
    if (window.confirm("Are you sure you want to clear Local Storage?") == true) {
      localStorage.removeItem("exchangeAPI")
      localStorage.removeItem("googleAPI")
      alert("Local Storage Cleared")
      window.location.reload();
    } else {
      alert("No changes made to Local Storage")
    }
  }

  return (
    <footer class="container-fluid d-flex justify-content-center align-items-center flex-column"> 
      <h6>Built by <a href="https://github.com/jminor90" target="_blank">jminor90</a></h6>
      <button id="removeButton" onClick={removeFunction}>Clear Local Storage</button>
    </footer>
  )
}
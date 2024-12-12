//Alert Feature

const searchBar = document.getElementById('search');
const searchButton = document.querySelector('glass');


searchBar.addEventListener ("click", () => {
  if (searchBar.value !== ""){
     alert(searchBar.value);
  }
                             
});

searchButton.addEventListener("click", () => {
    alert(searchButton.value);
  
})

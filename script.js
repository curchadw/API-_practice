async function getCountries(){
  let url = 'https://restcountries.eu/rest/v2/lang/es'
  try{
    let res = await fetch(url);
    return await res.json()
  }catch(error){
    console.log(error)
  }
}

async function renderCountries(){
  let countries = getCountries();
  let html = '';
  countries.forEach(country =>{
    let htmlSeg = `
    <div class="user">
      <h2>${country.name}</h2>
      <p>${country.capital}</p>
    </div>`;

    html += htmlSeg;
})

let container = document.querySelector('#spot')
container.innerHTML = html

}

renderCountries()
async function getCountries(){
  let url = 'https://restcountries.eu/rest/v2/all'
  try{
    let res = await fetch(url);
    return await res.json()
  }catch(error){
    console.log(error)
  }
}

async function renderCountries(){
  let countries = await getCountries();
 
  let html = ' ';
  countries.forEach(country =>{
    let htmlSeg = `
    <div class="country">
      <h2>${country.name}</h2>
      <p>${country.capital}</p>
      <p>${country.region}</p>
      <p>${country.subregion}</p>
    </div>`;

    html += htmlSeg;

  })



let container = document.getElementById('spot')
container.innerHTML = html

}

renderCountries()
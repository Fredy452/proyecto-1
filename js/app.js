
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if (this.readyState === 4 &&  this.status==200){

    var data = JSON.parse(this.responseText);

    console.log(data);
    document.getElementById("pais").innerHTML = data.country;
    document.getElementById("activos").innerHTML = data.active.toLocaleString();
    document.getElementById("casos").innerHTML = data.cases.toLocaleString();
    document.getElementById("criticos").innerHTML = data.critical.toLocaleString();
    document.getElementById("muertos").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recuperados").innerHTML = data.recovered.toLocaleString();
    document.getElementById("tests").innerHTML = data.tests.toLocaleString();
    document.getElementById("flag").src = data.countryInfo.flag;

  }
};




// Función Buscar
function buscar(){
  var input = document.getElementById("buscar").value;
  var url="https://corona.lmao.ninja/v2/countries/"+input;
  xhr.open("GET", url, true);
  xhr.send();
  //
  // fetch('https://corona.lmao.ninja/v2/countries/Mexico')
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //
  // });
}

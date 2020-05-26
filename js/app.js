
function alerta() {
  //$('#myModal').modal('show');
  toastr.success('Ingrese un pais para visualizar datos', 'CovidApp', {
    "closeButton": true,
    "positionClass": "toast-top-full-width",
  });
}



var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if (this.readyState === 4){

    if (this.status == 200 ) {

      var data = JSON.parse(this.responseText);
      document.getElementById("pais").innerHTML = data.country;
      document.getElementById("activos").innerHTML = data.active.toLocaleString();
      document.getElementById("casos").innerHTML = data.cases.toLocaleString();
      document.getElementById("criticos").innerHTML = data.critical.toLocaleString();
      document.getElementById("muertos").innerHTML = data.deaths.toLocaleString();
      document.getElementById("recuperados").innerHTML = data.recovered.toLocaleString();
      document.getElementById("tests").innerHTML = data.tests.toLocaleString();
      document.getElementById("flag").src = data.countryInfo.flag;


    }else {
      toastr.error('Pais Incorrecto ingrese de nuevo', 'CovidApp', {
        "closeButton": true,
        "positionClass": "toast-top-full-width",
      });
    }
  }
};




// Función Buscar
function buscar(){
  var input = document.getElementById("buscar").value;
  var url="https://corona.lmao.ninja/v2/countries/"+input;
  xhr.open("GET", url, true);
  xhr.send();
}

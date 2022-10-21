var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
// Typical action to be performed when the document is ready:
var marcas = JSON.parse(xhttp.responseText)

mountSelectMarcas(marcas)
};
xhttp.open("GET", "https://parallelum.com.br/fipe/api/v1/carros/marcas", true);
xhttp.send();
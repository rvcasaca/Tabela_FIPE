//URL padrão da API

const BASE_URL = "https://parallelum.com.br/fipe/api/v1/carros"

//Chamadas do Request
//Marcas
function get_marcas(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var marcas = JSON.parse(xhttp.responseText)
            
            mount_select_marcas(marcas)
        }
    };
    xhttp.open("GET", `${BASE_URL}/marcas`, true);
    xhttp.send();
}


//Modelos
function get_modelos(id_marca){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var modelos = JSON.parse(xhttp.responseText);
            
            mount_select_modelos(modelo.modelos)
        }
    };
    xhttp.open("GET", `${BASE_URL}/marcas/${id_marca}/modelos`, true);
    xhttp.send();
}

//execução principal
console.warn("Antes de chamar get_marcas")
get_marcas();
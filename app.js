//Constantes

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
            var resposta = JSON.parse(xhttp.responseText);
            
            mount_select_modelos(resposta.modelos)
        }
    };
    xhttp.open("GET", `${BASE_URL}/marcas/${id_marca}/modelos`, true);
    xhttp.send();
    }

//Ano
function get_ano(id_modelo){
    var id_marca = document.getElementById(MINHASMARCAS.marcas.codigo)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var ano = JSON.parse(xhttp.responseText);
            
            mount_select_ano(ano)
        }
    };
    xhttp.open("GET", `${BASE_URL}/marcas/${id_marca}/modelos/${id_modelo}/anos`, true);
    xhttp.send();
}

//Valor

//execução principal
get_marcas();
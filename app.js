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
            console.log(resposta)
            mount_select_modelos(resposta.modelos)
        }
    };
    xhttp.open("GET", `${BASE_URL}/marcas/${id_marca}/modelos`, true);
    xhttp.send();
    }

//Ano
function get_anos(id_modelo){
    var id_marca = document.getElementById("minhas_marcas").value
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var resposta = JSON.parse(xhttp.responseText);
            
            mount_select_anos(resposta)
        }
    };
    xhttp.open("GET", `${BASE_URL}/marcas/${id_marca}/modelos/${id_modelo}/anos`, true);
    xhttp.send();
}

//Valor
function get_valores(id_ano){
    var id_marca = document.getElementById("minhas_marcas").value
    var id_modelo = document.getElementById("meus_modelos").value
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var resposta = JSON.parse(xhttp.responseText);
            
           
        }
    };
    xhttp.open("GET", `${BASE_URL}/marcas/${id_marca}/modelos/${id_modelo}/anos/${id_ano}`, true);
    xhttp.send();

    document.getElementById("valores_carro") = resposta
}
//execução principal


get_marcas();
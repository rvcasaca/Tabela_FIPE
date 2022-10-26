const { text } = require("stream/consumers");

//funções utilizadas
function add_option(selectID,optionSelect);{
    var option = document.createElement("option");
    option.text = text;
    option.value = value;
    var select = document.getElementById(selectID);
    select.appendChild(option)

}

//montagem de inputs
function mount_select_marcas(marcas){
    console.log("mout_select_marcas")
    marcas.forEach(marcas => {
        add_option("minhas_marcas", marcas.nome, marcas.codigo)
    });
}

function mount_select_modelos(){
    console.log(modelos)
    modelos.forEach((modelo)=>{ add_option("modelo", modelo.nome, modelo.codigo)})
}



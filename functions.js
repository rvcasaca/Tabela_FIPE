//funções utilizadas
function add_option(selectID,text, value){
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
        add_option("MINHASMARCAS", marcas.nome, marcas.codigo)
    });
}

function mount_select_modelos(modelos){
    console.log(modelos)
    modelos.forEach((modelos)=> {
        add_option("modelos", modelos.nome, modelos.codigo)
    });
}

function mout_select_ano(ano){
    console.log("mout_select_ano")
    ano.forEach((ano) => {
        add_option("ano",ano.nome, ano.codigo)
    });
}


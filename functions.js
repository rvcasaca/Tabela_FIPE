//funções utilizadas
function add_option(selectID,text,value){
    var option = document.createElement("option");
    option.text = text;
    option.value = value;
    var select = document.getElementById(selectID);
    select.appendChild(option)

}

//montagem de inputs
function mount_select_marcas(marcas){
    console.log(marcas)
    marcas.forEach(marcas => {
        add_option("minhas_marcas", marcas.nome, marcas.codigo)
    });
}

function mount_select_modelos(modelos){
    console.log(modelos)
    modelos.forEach((modelos)=> {
        add_option("meus_modelos", modelos.nome, modelos.codigo)
    });
}

function mount_select_anos(anos){
    console.log(anos)
    anos.forEach((anos) => {
        add_option("meus_anos",anos.nome, anos.codigo)
    });
}

function mount_select_valores(valores){
    console.log(valores)
    valores.forEach((valores) => {
        add_option("valores_carro",valores.valor)
    });
}
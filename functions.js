//funções utilizadas
function add_option(selectID,optionSelect)

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



function addOption(select_id,select_option){
    if(select_option.value == undefined || select_option.value == ""){
        throw new Error("Preencha a opção de valores.")
        }
    
    if(option_select.tex==undefined||option_select.text){
        throw new Error("Preencha a opção de texto")
    }
    
    var option = document.createElement("option");
    option.text = option_select.text;
    option.value = option_select.value;
    
    var select = document.getElementById(select_id);
    select.appendChild(option);
}


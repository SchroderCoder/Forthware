function checkOne(){
    const checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
    const checkedOne = Array.prototype.slice.call(checkboxes2).some(x => x.checked);

    if(checkedOne){

    } else{
        const errorMessage = "Elige al menos un colaborador"
        alert(errorMessage);
    }
}   
function checkImagen(){
    const checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
    const checkedOne = Array.prototype.slice.call(checkboxes2).some(x => x.checked);

    let fileFilter 
        if (document.getElementById("archivo").file.mimetype == 'image/png' || 
            document.getElementById("archivo").file.mimetype == 'image/jpg' ||
            document.getElementById("archivo").file.mimetype == 'image/jpeg' ) {
                fileFilter =  true
        } else {
                fileFilter = false
        }
    

    console.log(fileFilter)

    if(checkedOne){

    } else{
        const errorMessage = "Elige al menos un colaborador"
        alert(errorMessage);
    }

    if(fileFilter){

    } else{
        const errorMessage = "Elige una imagen con extensión valida (png, jpg y jpeg)"
        alert(errorMessage);
    }
}   
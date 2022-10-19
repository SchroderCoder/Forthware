
function checkValue() {

    let proyecto =0 ;

    for (i=0; i<iterar;i++){

        if (document.getElementById("proyectos["+i+"]").value >= 0 && document.getElementById("proyectos["+i+"]").value <= 1000) {

        } else {
            const errorMessage = "No puedes elegir horas con números negativos";
            alert(errorMessage);
    
        }
             
        proyecto += parseFloat(document.getElementById("proyectos["+i+"]").value);
   }   

}

function checkTiempoCompleto() {

    const tiempocompleto= document.getElementById("completo").value;
    console.log(tiempocompleto)

    if (tiempocompleto >= 1 && tiempocompleto <= 100) {

    } else {
        const errorMessage = "No puedes elegir a más de 100 colaboradores";
        alert(errorMessage);

    }

}

function checkTiempoMedio() {

    const tiempomedio= document.getElementById("medio").value;

    if (!(tiempomedio >= 1 && tiempomedio <= 100)) {
        const errorMessage = "No puedes elegir a más de 100 colaboradores";
        alert(errorMessage);
        document.getElementById("medio").value = 6;
    }

}

function checkEfectividad() {

    const efectividad= document.getElementById("efectividad1").value;

    if (!(efectividad >= 0 && efectividad <= 100)) {
        const errorMessage = "No puedes elegir números menores a 0 o mayores a 100, regresando al ";
        alert(errorMessage);
        document.getElementById("efectividad1").value = 85;
    }

}

function checkFechas() {

    const inicio = document.getElementById("fecha_inicio").value
    const final = document.getElementById("fecha_fin").value

    console.log(inicio, final)

    if (inicio > final) {
        const errorMessage = "La fecha de inicio no puede ser mayor que la fecha final";
        alert(errorMessage);
    }
    else {

    }
}


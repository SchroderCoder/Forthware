
    function calculate() {
        const tiempocompleto= document.getElementById("completo");
        const tiempomedio= document.getElementById("medio");
        const efectividad= document.getElementById("efectividad");
        const horascompleto= document.getElementById("horascompleto");
        const horasmedio= document.getElementById("horasmedio");

        let proyectos=[] 
        let proyecto;
    
        console.log(horascompleto.value);
        console.log(horasmedio.value);
        console.log(tiempocompleto.value);
        console.log(tiempomedio.value);
        console.log(efectividad.value);

        for (i=0; i<iterar;i++){
            proyecto= document.getElementById("proyectos["+i+"]");
            proyectos.push(proyecto);
            console.log(proyecto.value);
        }
    }

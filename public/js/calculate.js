
    function calculate() {
        const tiempocompleto= document.getElementById("completo");
        const tiempomedio= document.getElementById("medio");
        const efectividad= document.getElementById("efectividad");
        const horascompleto= document.getElementById("horascompleto");
        const horasmedio= document.getElementById("horasmedio");
        const ausentescompleto= document.getElementById("ausentescompleto");
        const ausentesmedio= document.getElementById("ausentesmedio");

        let proyectos=[] 
        let proyecto =0 ;
        
        let horastotales =0;
        let horasausencia =0; 
        let horasesperadas =0;

        horastotales = (tiempocompleto.value *  horascompleto.value) + (tiempomedio.value * horasmedio.value);
        horasausencia = (ausentescompleto.value *  horascompleto.value) + (ausentesmedio.value * horasmedio.value);
        horasesperadas = horastotales - horasausencia;

         for (i=0; i<iterar;i++){
             proyecto = proyecto + document.getElementById("proyectos["+i+"]").value;
             console.log(proyecto);
            }

        
    }


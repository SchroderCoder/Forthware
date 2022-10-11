
 const calculate = () => {   

    const fecha_fin = document.getElementById('fecha_fin').value;
    const fecha_inicio = document.getElementById('fecha_inicio').value;
    const horas_completos = document.getElementById('horas_completos').value;
    const horas_medios = document.getElementById('horas_medios').value;
    const horas_totales = document.getElementById('horastotales').value;
    const horas_ausencia = document.getElementById('horasausencia').value;
    const horas_esperadas = document.getElementById('horasesperadas').value;
    const efectividad = document.getElementById('efectividad').value;
    const tiempo_completo= document.getElementById("completo");
    const tiempo_medio= document.getElementById("medio");

    let asignaciones = [];
    let proyecto =0 ;
    let efectividadaj= 0;

    for (i=0; i<iterar;i++){
             
        proyecto += parseFloat(document.getElementById("proyectos["+i+"]").value);
        asignaciones.push({nombre: document.getElementById("proyectos["+i+"]").name, horas: document.getElementById("proyectos["+i+"]").value});
   }   

   proyecto = proyecto.toFixed(2);     

   proporcion = ((proyecto / horas_esperadas)*100).toFixed(2);

   efectividadaj= (proporcion/(efectividad/100)).toFixed(2);

    data = new Object ();

    data.fecha_fin=fecha_fin;
    data.fecha_inicio=fecha_inicio;
    data.horastotalescompleto = horas_completos;
    data.horastotalesmedio = horas_medios;
    data.horastotales = horas_totales;
    data.horasausencia = horas_ausencia;
    data.horasesperadas = horas_esperadas;
    data.proporcion = proporcion;
    data.efectividadaj = efectividadaj;
    data.asignaciones = asignaciones;
    data.efectividad = efectividad;
    data.tiempocompleto = tiempo_completo;
    data.tiempomedio = tiempo_medio;

    const csrf = document.getElementById('_csrf').value;

    fetch('/reportes/crearReporte', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf  
        },
        body: JSON.stringify(data),
    }).then(result => {
        return result.json();
    }).then(data => {
        
    }).catch(err => {
        console.log(err);
    });

}


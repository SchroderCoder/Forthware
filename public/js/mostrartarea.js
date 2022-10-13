function mostrartarea(id){

    data = new Object ();

    data.id = id;

    const csrf = document.getElementById('_csrf').value;

    fetch('/tareas/OneTarea', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf  
        },
        body: JSON.stringify(data),
    }).then(result => {
        return result.json(); //Regresa otra promesa
    }).then(data => {
            console.log(data)

            
                document.getElementById("modal").innerHTML =
                '<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                '   <div class="modal-dialog" role="document">'+
                '  <div class="modal-content">'+
                '        <div class="modal-header"> ' +
                '          <h5 class="modal-title" id="exampleModalLabel"> <i class="material-icons iconSide">assignment</i>Tarea ' + data.tareas[0].id_tarea + '</h5> ' +
                '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
                '        </div> ' +
                '        <div class="modal-body text-center"> ' + 
                '            <p>Descripción de la tarea: '+ data.tareas[0].descripcion + '</p> ' +
                '            <p>Duración: '+ (data.tareas[0].duracion).toFixed(2) + ' Hrs</p> ' +
                '            for(e of data.empleados) {  ' + 
                '            <p>' +  data.empleados[0].nombre + '</p> ' +
                '             }  ' +
                '        </div> ' +
                '     </div> ' +
                '    </div> ' +
                '</div> ' 
            
    }).catch(err => {
        console.log(err);
    });

}
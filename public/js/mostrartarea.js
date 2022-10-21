function mostrartarea(id){

    document.getElementById("modal_contenidoT").innerHTML = '';

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

                let html = '';
                html +=
                '        <div class="modal-header"> ' +
                '          <h5 class="modal-title" id="exampleModalLabel"> <i class="material-icons iconSide">assignment</i>Tarea ' + data.tareas[0].id_tarea + '</h5> ' +
                '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
                '        </div> ' +
                '        <div class="modal-body text-center"> ' + 
                '            <p>Descripción de la tarea: '+ data.tareas[0].descripcion + '</p> ' +
                '            <p>Duración: '+ (data.tareas[0].duracion).toFixed(2) + ' Hrs</p> ' +
                ' <li>Colaboradores:</li>';
                for(e of data.empleados) {  
                    html += '            <li>' + e.nombre + '</li> ';
                }  

                html += '        </div> ';
            
                document.getElementById("modal_contenidoT").innerHTML = html;

    }).catch(err => {
        console.log(err);
    });

}
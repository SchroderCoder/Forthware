function mostrarproyecto(id){

    document.getElementById("modal_contenido").innerHTML = '';

    data = new Object ();

    data.id = id;

    const csrf = document.getElementById('_csrf').value;

    fetch('/proyectos/OneProyecto', {
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
                '          <h5 class="modal-title" id="exampleModalLabel"> <i class="material-icons iconSide">view_list</i>Proyecto ' + data.proyectos[0].id_proyecto + '</h5> ' +
                '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
                '        </div> ' +
                '        <div class="modal-body text-center"> ' + 
                '            <p>Nombre del proyecto: '+ data.proyectos[0].nombre + '</p> ' +
                '            <p>Descripción: '+ data.proyectos[0].descripcion + '</p> ' +
                '            <p>Estatus: '+ data.proyectos[0].estatus + '</p> ' +
                '            <p>Stack de tecnológia: '+ data.proyectos[0].stack_tecnologia + '</p> ' +
                ' <li>Colaboradores: </li>';
                for(e of data.empleados) { 
                    html += '            <li>' +  e.nombre + '</li> ';
                }  
                html += '           <img src=" '+ data.proyectos[0].image_url +' " class="img-circle mx-auto d-block img-fluid" alt="Imagen de Perfil Colaborador" onerror="this.onerror=null; this.src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"></img>' +
                '        </div> ';

                document.getElementById("modal_contenido").innerHTML = html;
            
    }).catch(err => {
        console.log(err);
    });

}


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
                '        <div class="modal-header main-nav"> ' +
                '          <h5 class="modal-title" id="exampleModalLabel"> <img src="/media/natgas-logo-simple.png" width="40" alt=" Logo NatGas">  Proyecto ' + data.proyectos[0].id_proyecto + '</h5> ' +
                '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
                '        </div> ' +
                '        <div class="modal-body text-center"> ' + 
                '           <div class="container"> ' +
                '           <div class="row"> ' +
                '           <div class="col"><img src="'+ data.proyectos[0].image_url +'" class="img-circle mx-auto d-block img-fluid" alt="Imagen de Perfil Colaborador"  ></img>' +
                '           </div> ' +
                '           <div class="col"> ' +
                '            <p>Nombre del proyecto: '+ data.proyectos[0].nombre + '</p> ' +
                '            <p>Descripción: '+ data.proyectos[0].descripcion + '</p> ' ;

                 if (data.proyectos[0].estatus== "Planeación") { 
                    html +=  '<p style="background-color: #9B38CA !important;" class="card-text " >Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 } 
                 if (data.proyectos[0].estatus == "Diseño") { 
                    html +=  '<p style="background-color: #00C4D0 !important;" class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 } 
                 if (data.proyectos[0].estatus == "Análisis") { 
                    html +=  '  <p style="background-color: #1A02AC !important;"class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 } 
                 if (data.proyectos[0].estatus == "Pruebas") { 
                    html +=  '  <p style="background-color: #ca3838 !important;" class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 } 
                 if (data.proyectos[0].estatus == "Mantenimiento") { 
                    html +=  '   <p style="background-color: #e0ce04 !important;" class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 } 
                 if (data.proyectos[0].estatus == "Construcción") { 
                    html +=  '  <p style="background-color: #DC6F0B !important;" class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 } 
                 if (data.proyectos[0].estatus == "Documentación") { 
                    html +=  '   <p style="background-color: #434342 !important;" class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 } 
                 if (data.proyectos[0].estatus == "Despliegue") { 
                    html +=  '<p style="background-color: #0a752c !important;" class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 } 
                 if (data.proyectos[0].estatus == "Planficación") { 
                    html +=  '<p style="background-color: #000000 !important;" class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 } 
                 if (data.proyectos[0].estatus == "Desarrollo") { 
                    html +=  '<p style="background-color: #48041b !important;" class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 }
                 if (data.proyectos[0].estatus == "Terminado") { 
                  html +=  '<p style="background-color:  #281091 !important;" class="card-text ">Estatus: '+ data.proyectos[0].estatus + ' </p>'
                 }
                
                html += '            </div> ' +
                '            </div> ' ;

                html += ' <br><p>Stack de tecnológia: '+ data.proyectos[0].stack_tecnologia + '</p> ';
                html += ' <li>Colaboradores: </li>';
                for(e of data.empleados) { 
                    html += '            <li>' +  e.nombre + '</li> ';
                }  

                document.getElementById("modal_contenido").innerHTML = html;
            
    }).catch(err => {
        console.log(err);
    });

}
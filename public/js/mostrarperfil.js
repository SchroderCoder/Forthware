
function mostrarperfil(id){

        document.getElementById("modal_contenido").innerHTML = '';
    
        data = new Object ();

        data.id = id;

        const csrf = document.getElementById('_csrf').value;

        fetch('/colaboradores/OneColaborador', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'csrf-token': csrf  
            },
            body: JSON.stringify(data),
        }).then(result => {
            return result.json(); //Regresa otra promesa
        }).then(data => {
                    tiempo = ''

                    if(data.empleados[0].disponibilidad = 35){
                        tiempo = 'Tiempo Completo';
                    } else if(data.empleados[0].disponibilidad = 18) {
                        tiempo = 'Tiempo Medio';
                    }

                    let html = '';
                
                    html +=
                    '        <div class="modal-header main-nav"> ' +
                    '          <h5 class="modal-title" id="exampleModalLabel"> <img src="/media/natgas-logo-simple.png" width="40" alt=" Logo NatGas"> ' + data.empleados[0].nombre + '</h5> ' +
                    '          <button type="button" class="btn-close btn-close-white" data-dismiss="modal" aria-label="Close"></button> ' +
                    '        </div> ' +
                    '        <div class="modal-body text-center"> ' + 
                    '           <div class="container"> ' +
                    '           <div class="row"> ' +
                    '           <div class="col"> <img src=" '+ data.empleados[0].image_url +' " class="img-circle mx-auto d-block img-fluid" alt="Imagen de Perfil Colaborador" onerror="this.onerror=null; this.src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"></img>' +
                    '           </div> ' +
                    '           <div class="col"> ' +
                    '            <p class="bg-danger">Nombre: '+ data.empleados[0].nombre + '</p> ' +
                    '            <p>Correro Electrónico: '+ data.empleados[0].correo_electronico + '</p> ' +
                    '            <p>Disponibilidad: '+ tiempo + '</p> ' +
                    '           </div> ' +
                    '           </div> ' +
                    '           </div><br> ' ;

                    html +=   
                    '  <div class="container"> ' +
                    '           <div class="row"> ' +
                    '<div class="col"> <li class= "bold-text text-success">Proyectos activos: </li>';
                    if(data.proyectos.length > 0) {
                        for(p of data.proyectos) {  
                            html += '<li>' +  p.nombre + '</li> ';
                        }
                    } else {
                        html += '<p>Sin proyectos asignados</p>';
                    }
                    html += '</div>'
                    html += ' <div class="col"> <li class= "bold-text text-success">Proyectos pasados: </li>';
                    html += '<li>Sin proyectos pasados</li></div> ';
                    html += '</div> ';
                    
                    document.getElementById("modal_contenido").innerHTML = html;

        }).catch(err => {
            console.log(err);
        });
        
}
